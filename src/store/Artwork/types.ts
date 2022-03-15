import { ActionType } from 'typesafe-actions'
import { clearArtworkReducer, createArtwork } from './actions'


export type ArtworkActions =
  | ActionType<typeof createArtwork>
  | ActionType<typeof clearArtworkReducer>

export type ArtworkStateType = {
  isSuccessCreateArtwork: boolean | null;
}


export type ArtworkType = {
  id: number;
  title: string;
  description: string;
  transactionHash: string;
  createdAt: string;
  updatedAt: string;
}


export type CreateArtworkPayload = {
  title: string;
  description: string;
  metadataUrl: string;
}
