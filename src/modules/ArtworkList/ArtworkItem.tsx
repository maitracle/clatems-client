import React from 'react'
import styled from '@emotion/styled'
import { ArtworkType } from 'store/Artwork/types'
import Span3 from 'components/typographies/Span3'
import H2 from 'components/typographies/H2'
import { FontWeights } from 'styles/fonts'
import StyledLink from 'components/StyledLink'


type Props = {
  artwork: ArtworkType;
}

const ArtworkItem = ({ artwork }: Props) => {
  return (
    <StyledLink to={`/artworks/${artwork.id}`}>
      <Wrapper>
        <div>
          <Image src={artwork.imageUrl} alt='artwork' />
        </div>
        <ContentsWrapper>
          <H2>{artwork.title}</H2>
          <DescriptionWrapper>
            <Span3>
              {artwork.description}
            </Span3>
          </DescriptionWrapper>

          <Label>
            <Span3 fontWeight={FontWeights.bold}>
              작가
            </Span3>
          </Label>
          <AuthorContentsWrapper>
            <Span3>
              {artwork.authorName}
            </Span3>
          </AuthorContentsWrapper>
          <AuthorContentsWrapper>
            <Span3>
              {artwork.authorDescription}
            </Span3>
          </AuthorContentsWrapper>
        </ContentsWrapper>
      </Wrapper>
    </StyledLink>

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

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`

const DescriptionWrapper = styled.div`
  height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Label = styled.div`
  margin-top: 12px;
`

const AuthorContentsWrapper = styled.div`
  width: 100%;
  height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default ArtworkItem
