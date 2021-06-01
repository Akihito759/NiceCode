export interface MediaModel {
   title: string;
   type: eMediaType;
}

export enum eMediaType {
  image = 'image',
  document = 'document',
  video = 'video',
  audio = 'audio'
}
