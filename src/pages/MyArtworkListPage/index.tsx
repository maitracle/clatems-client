import React from 'react'

import PageWrapper from 'components/layouts/PageWrapper'
import ArtworkList from 'modules/ArtworkList'
import { fetchMyArtworkList } from 'store/Artwork/actions'


const MyArtworkListPage = () => {
  return (
    <PageWrapper>
      this is my artwork list

      <ArtworkList fetchAction={fetchMyArtworkList} />
    </PageWrapper>
  )
}

export default MyArtworkListPage
