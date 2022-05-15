import React from 'react'
import PageWrapper from 'components/layouts/PageWrapper'
import { fetchArtworkList } from 'store/Artwork/actions'
import ArtworkList from 'modules/ArtworkList'
import Gnb from 'components/layouts/Gnb'
import PageTitle from 'components/layouts/PageTitle'


const Home = () => {
  return (
    <PageWrapper>
      <Gnb isMainPage title={{ isLogo: true, text: '' }} />
      <PageTitle title='작품 목록' />
      <ArtworkList fetchAction={fetchArtworkList} />
    </PageWrapper>
  )
}

export default Home
