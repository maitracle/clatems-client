import { createAction, createAsyncAction } from 'typesafe-actions'
import { ArtworkType, CreateArtworkPayload } from './types'


export const CREATE_ARTWORK_REQUEST = 'artwork/CREATE_ARTWORK_REQUEST'
export const CREATE_ARTWORK_SUCCESS = 'artwork/CREATE_ARTWORK_SUCCESS'
export const CREATE_ARTWORK_FAILURE = 'artwork/CREATE_ARTWORK_FAILURE'

export const CLEAR_ARTWORK_REDUCER = 'artwork/CLEAR_REDUCER'

export const createArtwork = createAsyncAction(
  CREATE_ARTWORK_REQUEST,
  CREATE_ARTWORK_SUCCESS,
  CREATE_ARTWORK_FAILURE,
)<CreateArtworkPayload, ArtworkType, void>()

export const clearArtworkReducer = createAction(CLEAR_ARTWORK_REDUCER)()
