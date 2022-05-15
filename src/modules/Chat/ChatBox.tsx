import React, {useEffect, useState} from 'react'
import PageWrapper from 'components/layouts/PageWrapper'
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import styled from '@emotion/styled';

type Props = {
  stompClient: any;
  username: string;
}

const ChatBox = ({ stompClient, username }: Props) => {
  const [message, setMessage] = useState("");
  const onChangeMsg = (event: React.FormEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value)
  };

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
