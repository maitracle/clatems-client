import React from 'react'

import PageWrapper from 'components/layouts/PageWrapper'
import Gnb from 'components/layouts/Gnb'
import PageTitle from 'components/layouts/PageTitle'
import CreateArtwork from 'modules/CreateArtwork'


const CreateArtworkPage = () => {

  return (
    <PageWrapper>
      <Gnb isMainPage title={{ isLogo: true, text: '' }} />
      <PageTitle title='작품 등록' />

      <CreateArtwork />
    </PageWrapper>
  )
}


export default CreateArtworkPage
