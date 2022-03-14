import { ActionType } from 'typesafe-actions';
import { connectContractSubject, fetchMyUser, updateMarketingConsentRequest } from './actions';


export type UserActions =
  | ActionType<typeof fetchMyUser>
  | ActionType<typeof updateMarketingConsentRequest>
  | ActionType<typeof connectContractSubject>;


export type UserStateType = {
  myUser: UserType;
  authentication: {
    isLoggedIn: boolean | null;
  };
}


export type UserType = {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  contractSubject: ContractSubjectType | null;
  agreedWithTermsOfServiceAt: string | null;
  agreedWithPrivacyPolicyAt: string | null;
  agreedWithMarketingConsentAt: string | null;
}

export type ContractSubjectType = {
  id: number;
  name: string;
  phone: string;
  isCertified: boolean;
  createdAt: string;
  updatedAt: string;
}

export const initialContractSubject: ContractSubjectType = {
  id: 0,
  name: '',
  phone: '',
  isCertified: false,
  createdAt: '',
  updatedAt: '',
};

export type SignRequestPayload = {
  email: string;
  password: string;
  name: string;
  phone: string;
}

export type SignWithKakaoPayload = {
  kakaoAuthorizationCode: string;
  redirectUri: string;
}

export type MarketingConsentRequestPayload = {
  marketingConsentAgreement: boolean,
}

export type ConnectContractSubjectRequestPayload = {
  iamportUid: string;
}
