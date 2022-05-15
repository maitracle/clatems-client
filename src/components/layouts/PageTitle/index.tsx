import React from 'react'
import styled from '@emotion/styled'
import H1 from 'components/typographies/H1'


type Props = {
  title: string
}

const PageTitle = ({ title }: Props) => {
  return (
    <Wrapper>
      <H1>{title}</H1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 20px;
`

export default PageTitle
