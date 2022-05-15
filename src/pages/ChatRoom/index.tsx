import React, {useEffect, useState} from 'react'
import PageWrapper from 'components/layouts/PageWrapper'
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';


const ChatRoom = () => {
  const [stompClient, setStompClient] = useState<any>(null)

  // username input
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value)
  };
  
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  }
  
  //message input
  const [message, setMessage] = useState("");
  const onChangeMsg = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setMessage(value)
  };
  
  const onSubmitMsg = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(message);
  }

  useEffect(() => {
    var socket = new SockJS('/ws');
    setStompClient(Stomp.over(socket))
  }, [])

  const setUsername = () => {
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
      JSON.stringify({sender: 'username test', type: 'JOIN'})
    )
  }

  const sendMessage = () => {
    const content = "some content"

    stompClient.send("/chat.sendMessage",
      {},
      JSON.stringify({sender: value, type: 'CHAT', content: message})
    )
  }



  return (
    <PageWrapper>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button onClick={setUsername}>
          set username
        </button>
      </form>

      <form onSubmit={onSubmitMsg}>
        <input
          value={message}
          onChange={onChangeMsg}
          type="text"
          placeholder="message"
        />
        <button onClick={sendMessage}>
          send message
        </button>
      </form>
    </PageWrapper>
  )
}

export default ChatRoom
