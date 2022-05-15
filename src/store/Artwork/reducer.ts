import { createReducer } from 'typesafe-actions'
import { ArtworkActions, ArtworkStateType } from './types'
import {
  CLEAR_ARTWORK_REDUCER,
  CREATE_ARTWORK_FAILURE,
  CREATE_ARTWORK_SUCCESS,
  FETCH_ARTWORK_FAILURE,
  FETCH_ARTWORK_LIST_FAILURE,
  FETCH_ARTWORK_LIST_SUCCESS,
  FETCH_ARTWORK_SUCCESS,
} from './actions'


const initialRetrieveArtwork = {
  id: 0,
  title: '',
  description: '',
  metadataUrl: '',
  authorName: '',
  authorDescription: '',
  imageUrl: '',
  transactionHash: '',
  createdAt: '',
  updatedAt: '',
}

const initialState: ArtworkStateType = {
  isSuccessCreateArtwork: null,
  artworkList: [],
  retrieveArtwork: initialRetrieveArtwork,
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
  [FETCH_ARTWORK_SUCCESS]: (state, action) => {
    return {
      ...state,
      retrieveArtwork: action.payload,
    }
  },
  [FETCH_ARTWORK_FAILURE]: (state) => {
    return {
      ...state,
      retrieveArtwork: initialRetrieveArtwork,
    }
  },
  [CLEAR_ARTWORK_REDUCER]: () => {
    return initialState
  },
})

export default artworkReducer
