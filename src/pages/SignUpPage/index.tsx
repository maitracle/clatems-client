import React from 'react';
import PageWrapper from 'components/layouts/PageWrapper';
import SignForm from 'modules/Sign/SignForm';
import { signUp } from 'store/user/actions';


const SignUpPage = () => {
  return (
    <PageWrapper>
      <div>
        this is sign up page
      </div>
      <SignForm signAction={signUp}/>
    </PageWrapper>
  );
};


export default SignUpPage;