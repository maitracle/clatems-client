import React, { useEffect } from 'react'

import PageWrapper from 'components/layouts/PageWrapper'
import ArtworkDetail from 'modules/ArtworkDetail'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchArtwork } from 'store/Artwork/actions'


const ArtworkDetailPage = () => {
  const {artworkId} = useParams<{ artworkId: string }>()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArtwork.request(Number(artworkId)))
  }, [dispatch, artworkId])

  return (
    <PageWrapper>
      <ArtworkDetail />
    </PageWrapper>
  )
}

export default ArtworkDetailPage
