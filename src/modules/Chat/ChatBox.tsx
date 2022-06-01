import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled';
import MessageItem, { MessageType } from './MessageItem';


type Props = {
  stompClient: any;
  username: string;
  receivedMessageList: MessageType[];
}

const ChatBox = ({ stompClient, username, receivedMessageList}: Props) => {
  const [message, setMessage] = useState("");

  const onChangeMsg = (event: React.FormEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value)
  };
  const [receivedMsg, setReceivedMsg] = useState<MessageType>()

  const sendMessage = () => {
    if (message === ''){
      return alert('메세지를 입력하세요.');
    }
    stompClient.send("/app/chat.sendMessage",
      {},
      JSON.stringify({sender: username, type: 'CHAT', content: message}),
      setMessage("")
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }

  const Disconnect = () => {
    window.location.replace("/chat");
    stompClient.disconnect();
  }

  return (
    <Wrapper>
      {receivedMessageList.map((receivedMsg, index) => {
        return <MessageItem key={index} message={receivedMsg} username={username} />
      })}
      <InputWrapper>
        <input
            value={message}
            onChange={onChangeMsg}
            type="text"
            placeholder="message"
            onKeyPress={handleKeyPress}
          />

        <StyledButtonSend onClick={sendMessage}>
          보내기
        </StyledButtonSend>

        <StyledButtonLeave 
          onClick={Disconnect}>
          나가기
        </StyledButtonLeave>
      </InputWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  height: 3rem;
`;

const InputWrapper = styled.div`
  margin-left: 1rem;
  margin-top: 3rem;
`

export const StyledButtonSend = styled.button`
  border: none;
  padding: 0.375rem;
  margin-left: 1rem;
  border-radius: 1rem;  
  background: #e5dbff;
  $:hover{
    text-decoration: underline;
  }
  &:active{
    background-color: #f3f0ff;
  }
`;

const StyledButtonLeave = styled.button`
  border: none;
  padding: 0.375rem;
  margin-left: 1em;
  border-radius: 1rem;  
  background: #f1f3f5;
  $:hover{
    text-decoration: underline;
  }
  &:active{
    background-color: #e9ecef;
  }
`;

export default ChatBox
