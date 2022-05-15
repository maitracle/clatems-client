import React from 'react'
import PageWrapper from 'components/layouts/PageWrapper'
import SignForm from 'modules/Sign/SignForm'
import { signUp } from 'store/user/actions'
import Gnb from 'components/layouts/Gnb'
import PageTitle from 'components/layouts/PageTitle'


const SignUpPage = () => {
  return (
    <PageWrapper>
      <Gnb isMainPage title={{ isLogo: true, text: '' }} />
      <PageTitle title='회원가입' />
      <SignForm signAction={signUp} />
    </PageWrapper>
  )
}


export default SignUpPage
