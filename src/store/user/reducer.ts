import { createReducer } from 'typesafe-actions'
import { UserActions, UserStateType } from './types'
import { FETCH_MY_USER_FAILURE, FETCH_MY_USER_SUCCESS } from './actions'


const initialState: UserStateType = {
  myUser: {
    id: 0,
    email: '',
    createdAt: '',
    updatedAt: '',
  },
  authentication: {
    isLoggedIn: null,
  },
}

const userReducer = createReducer<UserStateType, UserActions>(initialState, {
  [FETCH_MY_USER_SUCCESS]: (state, action) => {
    return ({
      ...state,
      myUser: action.payload,
      authentication: {
        ...state.authentication,
        isLoggedIn: true,
      },
    })
  },
  [FETCH_MY_USER_FAILURE]: (state) => {
    return {
      ...state,
      myUser: initialState.myUser,
      authentication: {
        ...state.authentication,
        isLoggedIn: false,
      },
    }
  },
})

export default userReducer
