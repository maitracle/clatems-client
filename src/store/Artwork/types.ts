import { ActionType } from 'typesafe-actions'
import { clearArtworkReducer, createArtwork, fetchArtworkList, fetchMyArtworkList } from './actions'


export type ArtworkActions =
  | ActionType<typeof createArtwork>
  | ActionType<typeof fetchArtworkList>
  | ActionType<typeof fetchMyArtworkList>
  | ActionType<typeof clearArtworkReducer>

export type ArtworkStateType = {
  isSuccessCreateArtwork: boolean | null;
  artworkList: ArtworkType[];
}


export type ArtworkType = {
  id: number;
  title: string;
  description: string;
  metadataUrl: string;
  imageUrl: string;
  transactionHash: string;
  createdAt: string;
  updatedAt: string;
}


export type CreateArtworkPayload = {
  title: string;
  description: string;
  metadataUrl: string;
  imageUrl: string;
}
