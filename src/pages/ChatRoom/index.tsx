import React, {useEffect, useState} from 'react'
import PageWrapper from 'components/layouts/PageWrapper'
import ChatBox from 'modules/Chat/ChatBox'
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';


enum ChatStep {
  SETTING_USERNAME = 'SETTING_USERNAME',
  CHATTING = 'CHATTING',
}

const ChatRoom = () => {
  const [chatStep, setChatStep] = useState<ChatStep>(ChatStep.SETTING_USERNAME)
  const [stompClient, setStompClient] = useState<any>(null)

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

  const onMessageReceived = () => {
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

  return (
    <PageWrapper>
      {
        chatStep === ChatStep.SETTING_USERNAME && <>
            <input
              value={username}
              onChange={onChangeUsername}
              type="text"
              placeholder="username"
            />
            <button onClick={connectChatRoom}>
              접속하기
            </button>
        </>
      }

      {
        chatStep === ChatStep.CHATTING && <ChatBox stompClient={stompClient} username={username} />
      }
    </PageWrapper>
  )
}

export default ChatRoom
