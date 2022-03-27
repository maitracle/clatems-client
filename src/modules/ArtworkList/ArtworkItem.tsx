import React from 'react'
import styled from '@emotion/styled'
import { ArtworkType } from 'store/Artwork/types'


type Props = {
  artwork: ArtworkType;
}

const ArtworkItem = ({ artwork }: Props) => {
  return (
    <Wrapper>
      <div>
        <Image src={artwork.imageUrl} alt='artwork' />
      </div>
      <ContentsWrapper>
        <div>
          {artwork.title}
        </div>
        <div>
          {artwork.description}
        </div>
      </ContentsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 160px;
  border-bottom: solid 1px lightgray;
`

const Image = styled.img`
  height: 150px;
`

const ContentsWrapper = styled.div`
  margin-left: 10px;
`

export default ArtworkItem
