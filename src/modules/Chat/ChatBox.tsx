import React, {useEffect, useState} from 'react'
import PageWrapper from 'components/layouts/PageWrapper'
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import styled from '@emotion/styled';
import MessageItem, { MessageType } from './MessageItem';

type Props = {
  stompClient: any;
  username: string;
  receivedMessageList: MessageType[];
}

// const mockData: MessageType[] = [
//   {type: 'JOIN', content: '', sender: 'user1'},
//   {type: 'CHAT', content: 'message11111', sender: 'user1'},
//   {type: 'CHAT', content: 'message222222', sender: 'user1'},
//   {type: 'CHAT', content: 'message3333333', sender: 'me'},
//   {type: 'LEAVE', content: '', sender: 'user1'},
// ]

const ChatBox = ({ stompClient, username, receivedMessageList }: Props) => {
  const [message, setMessage] = useState("");
  const onChangeMsg = (event: React.FormEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value)
  };
  const [receivedMsg, setReceivedMsg] = useState<MessageType>()

  const sendMessage = () => {
    stompClient.send("/app/chat.sendMessage",
      {},
      JSON.stringify({sender: username, type: 'CHAT', content: message})
    )
  }

  return (
    <PageWrapper>
      {receivedMessageList.map((receivedMsg, index) => {
        return <MessageItem key={index} message={receivedMsg} username={username} />
      })}

      <input
        value={message}
        onChange={onChangeMsg}
        type="text"
        placeholder="message"
      />
      <button onClick={sendMessage}>
        send message
      </button>
    </PageWrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 20px;
`;

export default ChatBox
