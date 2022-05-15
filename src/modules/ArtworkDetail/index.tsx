import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import Gnb from 'components/layouts/Gnb'
import H1 from 'components/typographies/H1'
import Span1 from 'components/typographies/Span1'


const ArtworkDetail = () => {
  const { retrieveArtwork } = useSelector((state: RootState) => state.artwork)

  return (
    <Wrapper>
      <Image src={retrieveArtwork.imageUrl} alt='artwork' />

      <H1>
        {retrieveArtwork.title}
      </H1>
      <Span1>
        {retrieveArtwork.description}
      </Span1>

      <Divider />

      <H1>
        작가
      </H1>
      <Span1>
        {retrieveArtwork.authorName}
      </Span1>
      <div>
        <Span1>
          {retrieveArtwork.authorDescription}
        </Span1>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 20px;
`

const Image = styled.img`
  width: 100%;
`

const Divider = styled.div`
  margin: 20px 0;
  width: 100%;
  border-bottom: solid 1px #adb5bd;
`

export default ArtworkDetail
