import React from 'react'
import styled from '@emotion/styled'
import Span3 from 'components/typographies/Span3'
import H2 from 'components/typographies/H2'
import { FontWeights } from 'styles/fonts'


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
          <DescriptionWrapper>
              <Span3>
                {message.sender}(이)가 입장했습니다.
              </Span3>
            </DescriptionWrapper>
        </>
        }

        {
          message.type === 'LEAVE' && <>
            <DescriptionWrapper>
              <Span3>
                {message.sender}(이)가 퇴장했습니다.
              </Span3>
            </DescriptionWrapper>
          </>
        }
        {
          message.type === 'CHAT' && message.sender === username && <>
            <ContentsWrapper>
              <h2>나: {message.sender}</h2>
              <DescriptionWrapper>
                <Span3>{message.content}</Span3>
              </DescriptionWrapper>
            </ContentsWrapper>
          </>
        }
        {
          message.type === 'CHAT' && message.sender !== username && <>
            <ContentsWrapper>
              <h2>너: {message.sender}</h2>
              <DescriptionWrapper>
                <Span3>{message.content}</Span3>
              </DescriptionWrapper>

              <SomeDivTag>
                sdfasdf
              </SomeDivTag>
            </ContentsWrapper>
          </>
        }
      </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 160px;
  border-bottom: solid 1px lightgray;
`

const ContentsWrapper = styled.div`
  margin-left: 10px;
  flex: 1 1 0;
`

const DescriptionWrapper = styled.div`
  height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const SomeDivTag = styled.div`
  border: solid 1px red;
  padding: 5px;
  border-radius: 10px;
`

export default MessageItem
