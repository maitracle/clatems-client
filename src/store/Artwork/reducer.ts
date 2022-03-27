import { createReducer } from 'typesafe-actions'
import { ArtworkActions, ArtworkStateType } from './types'
import {
  CLEAR_ARTWORK_REDUCER,
  CREATE_ARTWORK_FAILURE,
  CREATE_ARTWORK_SUCCESS, FETCH_ARTWORK_LIST_FAILURE,
  FETCH_ARTWORK_LIST_SUCCESS,
} from './actions'


const initialState: ArtworkStateType = {
  isSuccessCreateArtwork: null,
  artworkList: [],
}

const artworkReducer = createReducer<ArtworkStateType, ArtworkActions>(initialState, {
  [CREATE_ARTWORK_SUCCESS]: (state) => {
    return {
      ...state,
      isSuccessCreateArtwork: true,
    }
  },
  [CREATE_ARTWORK_FAILURE]: (state) => {
    return {
      ...state,
      isSuccessCreateArtwork: false,
    }
  },
  [FETCH_ARTWORK_LIST_SUCCESS]: (state, action) => {
    return {
      ...state,
      artworkList: action.payload,
    }
  },
  [FETCH_ARTWORK_LIST_FAILURE]: (state) => {
    return {
      ...state,
      artworkList: [],
    }
  },
  [CLEAR_ARTWORK_REDUCER]: () => {
    return initialState
  },
})

export default artworkReducer
