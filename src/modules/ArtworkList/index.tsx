import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { GrayColors } from 'styles/colors'
import { fetchArtworkList } from 'store/Artwork/actions'
import { RootState } from 'store'
import ArtworkItem from './ArtworkItem'


const ArtworkList = () => {
  const dispatch = useDispatch()
  const { artworkList } = useSelector((state: RootState) => state.artwork)

  useEffect(() => {
    dispatch(fetchArtworkList.request())
  }, [dispatch])


  return (
    <Wrapper>
      <Label>
        this is artwork list module
      </Label>

      {artworkList.map((artwork) => {
        return <ArtworkItem key={artwork.id} artwork={artwork} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 20px;
`

const Label = styled.div`
  margin-top: 31px;

  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.01em;
  color: ${GrayColors.gray500};
`

export default ArtworkList
