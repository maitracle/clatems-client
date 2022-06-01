import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtworkList, fetchMyArtworkList } from 'store/Artwork/actions'
import { RootState } from 'store'
import ArtworkItem from './ArtworkItem'


type Props = {
  fetchAction: typeof fetchArtworkList | typeof fetchMyArtworkList
}

const ArtworkList = ({ fetchAction }: Props) => {
  const dispatch = useDispatch()
  const { artworkList } = useSelector((state: RootState) => state.artwork)

  useEffect(() => {
    dispatch(fetchAction.request())
  }, [dispatch, fetchAction])


  return (
    <Wrapper>
      {artworkList.map((artwork) => {
        return <ArtworkItem key={artwork.id} artwork={artwork} />
      })}
      {/*{artworkList.filter(artwork => artwork.id > 16).map((artwork) => {*/}
      {/*  return <ArtworkItem key={artwork.id} artwork={artwork} />*/}
      {/*})}*/}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 20px;
`
export default ArtworkList
