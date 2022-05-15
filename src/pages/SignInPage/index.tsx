import React from 'react'
import PageWrapper from 'components/layouts/PageWrapper'
import SignForm from 'modules/Sign/SignForm'
import { signIn } from 'store/user/actions'
import Gnb from 'components/layouts/Gnb'
import PageTitle from 'components/layouts/PageTitle'


const SignInPage = () => {
  return (
    <PageWrapper>
      <Gnb isMainPage title={{ isLogo: true, text: '' }} />
      <PageTitle title='로그인' />
      <SignForm signAction={signIn} />
    </PageWrapper>
  )
}


export default SignInPage
