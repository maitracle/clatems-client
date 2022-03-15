import { createAsyncAction } from 'typesafe-actions'
import { SignRequestPayload, UserType } from './types'


export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE'

export const SIGN_IN_REQUEST = 'user/SIGN_IN_REQUEST'
export const SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS'
export const SIGN_IN_FAILURE = 'user/SIGN_IN_FAILURE'

export const FETCH_MY_USER_REQUEST = 'user/FETCH_MY_USER_REQUEST'
export const FETCH_MY_USER_SUCCESS = 'user/FETCH_MY_USER_SUCCESS'
export const FETCH_MY_USER_FAILURE = 'user/FETCH_MY_USER_FAILURE'


export const signUp = createAsyncAction(
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
)<SignRequestPayload, UserType, void>()

export const signIn = createAsyncAction(
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
)<SignRequestPayload, UserType, void>()

export const fetchMyUser = createAsyncAction(
  FETCH_MY_USER_REQUEST,
  FETCH_MY_USER_SUCCESS,
  FETCH_MY_USER_FAILURE,
)<void, UserType, void>()
