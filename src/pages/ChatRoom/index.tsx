import React, {useEffect, useState} from 'react'
import PageWrapper from 'components/layouts/PageWrapper'
import ChatBox from 'modules/Chat/ChatBox'
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import Gnb from 'components/layouts/Gnb'
import { MessageType } from 'modules/Chat/MessageItem';
import PageTitle from 'components/layouts/PageTitle';
import styled from '@emotion/styled';


export enum ChatStep {
  SETTING_USERNAME = 'SETTING_USERNAME',
  CHATTING = 'CHATTING',
}

export const ChatRoom = () => {
  const [chatStep, setChatStep] = useState<ChatStep>(ChatStep.SETTING_USERNAME)
  const [stompClient, setStompClient] = useState<any>(null)
  const [receivedMessageList, setReceivedMessageList] = useState<MessageType[]>([])

  const [username, setUsername] = useState("");
  const onChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
  };

  useEffect(() => {
    var socket = new SockJS('/ws');
    setStompClient(Stomp.over(socket))
  }, [])

  const connectChatRoom = () => {
    stompClient.connect({},
      onConnected,
      () => {}
    );
  }

  const onMessageReceived = (message: any) => {
    setReceivedMessageList((prev) => {
      return [...prev, JSON.parse(message.body)]
    })
  }

  const onConnected = () => {
    // Subscribe to the Public Topic
    stompClient.subscribe('/topic/public', onMessageReceived);

    // Tell your username to the server
    stompClient.send("/app/chat.addUser",
      {},
      JSON.stringify({sender: username, type: 'JOIN'})
    )
    setChatStep(ChatStep.CHATTING)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      connectChatRoom();
    }
  }

  return (
    <PageWrapper>
      <Gnb isMainPage title={{isLogo: true, text: ''}}/>
      <PageTitle title='대화하기'/>
      {
        chatStep === ChatStep.SETTING_USERNAME && <>
            <InputWrapper><input
              value={username}
              onChange={onChangeUsername}
              type="text"
              placeholder="username"
              onKeyPress={handleKeyPress}
            /></InputWrapper>
            <StyledButtonEnter onClick={connectChatRoom}>
              접속하기
            </StyledButtonEnter>
        </>
      }

      {
        chatStep === ChatStep.CHATTING && <ChatBox stompClient={stompClient} username={username} receivedMessageList={receivedMessageList} />
      }
    </PageWrapper>
  )
}

export default ChatRoom

const InputWrapper = styled.div`
  padding-left: 8rem;  
`

const StyledButtonEnter = styled.button`
  border: none;
  padding: 0.375rem;
  margin-top: 1rem;
  margin-left: 10rem;
  margin-right: 10rem;
  border-radius: 1rem;  
  background: #f1f3f5;
  $:hover{
    text-decoration: underline;
  }
  &:active{
    background-color: #e9ecef;
  }
`;