import { ActionType } from 'typesafe-actions'
import { fetchMyUser } from './actions'


export type UserActions =
  | ActionType<typeof fetchMyUser>;

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
}

export type SignRequestPayload = {
  email: string;
  password: string;
}
