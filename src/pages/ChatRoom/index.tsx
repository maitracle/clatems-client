import React, {useEffect, useState} from 'react'
import PageWrapper from 'components/layouts/PageWrapper'
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';


const ChatRoom = () => {
  const [stompClient, setStompClient] = useState<any>(null)

  const [username, setUsername] = useState("");
  const onChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
  };
  
  const [message, setMessage] = useState("");
  const onChangeMsg = (event: React.FormEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value)
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
  }

  const sendMessage = () => {
    const content = "some content"

    stompClient.send("/chat.sendMessage",
      {},
      JSON.stringify({sender: username, type: 'CHAT', content: message})
    )
  }

  return (
    <PageWrapper>
      <input
        value={username}
        onChange={onChangeUsername}
        type="text"
        placeholder="username"
      />
      <button onClick={connectChatRoom}>
        접속하기
      </button>


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

export default ChatRoom
