import React from 'react'

import PageWrapper from 'components/layouts/PageWrapper'
import ArtworkList from 'modules/ArtworkList'
import { fetchArtworkList } from 'store/Artwork/actions'


const ArtworkListPage = () => {
  return (
    <PageWrapper>
      <ArtworkList fetchAction={fetchArtworkList} />
    </PageWrapper>
  )
}

export default ArtworkListPage
