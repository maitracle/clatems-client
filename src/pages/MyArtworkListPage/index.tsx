import React from 'react'

import PageWrapper from 'components/layouts/PageWrapper'
import ArtworkList from 'modules/ArtworkList'
import { fetchMyArtworkList } from 'store/Artwork/actions'
import PageTitle from 'components/layouts/PageTitle'
import Gnb from 'components/layouts/Gnb'


const MyArtworkListPage = () => {
  return (
    <PageWrapper>
      <Gnb isMainPage title={{ isLogo: true, text: '' }} />
      <PageTitle title={'내 작품'} />

      <ArtworkList fetchAction={fetchMyArtworkList} />
    </PageWrapper>
  )
}

export default MyArtworkListPage
