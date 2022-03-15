import { createReducer } from 'typesafe-actions'
import { ArtworkActions, ArtworkStateType } from './types'
import { CLEAR_ARTWORK_REDUCER, CREATE_ARTWORK_FAILURE, CREATE_ARTWORK_SUCCESS } from './actions'


const initialState: ArtworkStateType = {
  isSuccessCreateArtwork: null,
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
  [CLEAR_ARTWORK_REDUCER]: () => {
    return initialState
  },
})

export default artworkReducer
