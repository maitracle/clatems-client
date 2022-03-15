import React from 'react';
import PageWrapper from 'components/layouts/PageWrapper';
import SignForm from 'modules/Sign/SignForm';
import { signIn } from 'store/user/actions';


const SignInPage = () => {
  return (
    <PageWrapper>
      <div>
        this is sign in page
      </div>
      <SignForm signAction={signIn}/>
    </PageWrapper>
  );
};


export default SignInPage;