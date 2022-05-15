import { createAction, createAsyncAction } from 'typesafe-actions'
import { ArtworkType, CreateArtworkPayload } from './types'


export const CREATE_ARTWORK_REQUEST = 'artwork/CREATE_ARTWORK_REQUEST'
export const CREATE_ARTWORK_SUCCESS = 'artwork/CREATE_ARTWORK_SUCCESS'
export const CREATE_ARTWORK_FAILURE = 'artwork/CREATE_ARTWORK_FAILURE'

export const FETCH_ARTWORK_LIST_REQUEST = 'artwork/FETCH_ARTWORK_LIST_REQUEST'
export const FETCH_ARTWORK_LIST_SUCCESS = 'artwork/FETCH_ARTWORK_LIST_SUCCESS'
export const FETCH_ARTWORK_LIST_FAILURE = 'artwork/FETCH_ARTWORK_LIST_FAILURE'

export const FETCH_MY_ARTWORK_LIST_REQUEST = 'artwork/FETCH_MY_ARTWORK_LIST_REQUEST'
export const FETCH_MY_ARTWORK_LIST_SUCCESS = 'artwork/FETCH_MY_ARTWORK_LIST_SUCCESS'
export const FETCH_MY_ARTWORK_LIST_FAILURE = 'artwork/FETCH_MY_ARTWORK_LIST_FAILURE'

export const FETCH_ARTWORK_REQUEST = 'artwork/FETCH_ARTWORK_REQUEST'
export const FETCH_ARTWORK_SUCCESS = 'artwork/FETCH_ARTWORK_SUCCESS'
export const FETCH_ARTWORK_FAILURE = 'artwork/FETCH_ARTWORK_FAILURE'

export const CLEAR_ARTWORK_REDUCER = 'artwork/CLEAR_REDUCER'


export const createArtwork = createAsyncAction(
  CREATE_ARTWORK_REQUEST,
  CREATE_ARTWORK_SUCCESS,
  CREATE_ARTWORK_FAILURE,
)<CreateArtworkPayload, ArtworkType, void>()

export const fetchArtworkList = createAsyncAction(
  FETCH_ARTWORK_LIST_REQUEST,
  FETCH_ARTWORK_LIST_SUCCESS,
  FETCH_ARTWORK_LIST_FAILURE,
)<void, ArtworkType[], void>()

export const fetchMyArtworkList = createAsyncAction(
  FETCH_MY_ARTWORK_LIST_REQUEST,
  FETCH_MY_ARTWORK_LIST_SUCCESS,
  FETCH_MY_ARTWORK_LIST_FAILURE,
)<void, ArtworkType[], void>()

export const fetchArtwork = createAsyncAction(
  FETCH_ARTWORK_REQUEST,
  FETCH_ARTWORK_SUCCESS,
  FETCH_ARTWORK_FAILURE,
)<number, ArtworkType, void>()

export const clearArtworkReducer = createAction(CLEAR_ARTWORK_REDUCER)()
