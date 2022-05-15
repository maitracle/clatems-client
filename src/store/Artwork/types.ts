import { ActionType } from 'typesafe-actions'
import { clearArtworkReducer, createArtwork, fetchArtwork, fetchArtworkList, fetchMyArtworkList } from './actions'


export type ArtworkActions =
  | ActionType<typeof createArtwork>
  | ActionType<typeof fetchArtworkList>
  | ActionType<typeof fetchMyArtworkList>
  | ActionType<typeof fetchArtwork>
  | ActionType<typeof clearArtworkReducer>

export type ArtworkStateType = {
  isSuccessCreateArtwork: boolean | null;
  artworkList: ArtworkType[];
  retrieveArtwork: ArtworkType;
}


export type ArtworkType = {
  id: number;
  title: string;
  description: string;
  metadataUrl: string;
  authorName: string;
  authorDescription: string;
  imageUrl: string;
  transactionHash: string;
  createdAt: string;
  updatedAt: string;
}


export type CreateArtworkPayload = {
  title: string;
  description: string;
  authorName: string;
  authorDescription: string;
  metadataUrl: string;
  imageUrl: string;
}
