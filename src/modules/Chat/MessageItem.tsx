import React from 'react'
import styled from '@emotion/styled'
import Span3 from 'components/typographies/Span3'


export type MessageType = {
  type: 'JOIN' | 'CHAT' | 'LEAVE';
  content: string;
  sender: string;
}

type Props = {
  message: MessageType;
  username: string;
}

const MessageItem = ({ message, username }: Props) => {
  return (
      <Wrapper>
        {
        message.type === 'JOIN' && <>
          <Span3>
            {message.sender}(이)가 입장했습니다.
          </Span3>
        </>
        }
        {
          message.type === 'LEAVE' && <> 
            <Span3>
              {message.sender}(이)가 퇴장했습니다.
            </Span3>
            </>
        }
        {
          message.type === 'CHAT' && message.sender === username && <>
          <MeNameWrapper>{message.sender}</MeNameWrapper>
          <TextBalloonMe>  
            <MessageWrapper><Span3>{message.content}</Span3></MessageWrapper>
          </TextBalloonMe>
          </>
        }
        {
          message.type === 'CHAT' && message.sender !== username && <>
          <NicknameWrapper>{message.sender}</NicknameWrapper>
          <TextBalloonYou>
            <MessageWrapper><Span3>{message.content}</Span3></MessageWrapper>
          </TextBalloonYou>
          </>
        }
      </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 3rem;
  padding-left: 1rem;
`
const NicknameWrapper = styled.div`
  font-size: 13px;
  padding-left: 0.3rem;
  padding-bottom: 0.3rem;
  margin-top: 1rem;
`
const MeNameWrapper = styled.div`
  font-size: 13px;
  padding-left: 10.3rem;
  padding-bottom: 0.3rem;
  margin-top: 1rem;
`

const MessageWrapper = styled.div`
  padding-left: 0.3rem;
`

const TextBalloonMe = styled.div`
  border: none;
  background: #f3f0ff;
  padding: 5px;
  border-radius: 15px;
  margin-left: 10rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
`

const TextBalloonYou = styled.div`
border: none;
background: #f1f3f5;
padding: 5px;
border-radius: 15px;
margin-right: 10rem;
margin-bottom: 1rem;
`

export default MessageItem
