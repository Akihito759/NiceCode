import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { eMediaType, MediaModel } from '../models/media-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Observable<MediaModel[]> {
    return of([{
      title: 'Money In The Grave',
      type: eMediaType.audio
    },
    {
      title: 'Heaven',
      type: eMediaType.audio
    },
    {
      title: 'The Two Towers',
      type: eMediaType.document
    },
    {
      title: 'The Return of the King',
      type: eMediaType.document
    },
    {
      title: 'Memories',
      type: eMediaType.audio
    },
    {
      title: 'Sucker',
      type: eMediaType.audio
    },
    {
      title: 'You Need To Calm Down',
      type: eMediaType.audio
    },
    {
      title: 'The Fellowship of the Ring',
      type: eMediaType.document
    },
    {
      title: 'You Need To Calm Down',
      type: eMediaType.audio
    },
    {
      title: 'Doge',
      type: eMediaType.image
    },
    {
      title: 'My Little Pony',
      type: eMediaType.video
    },
    {
      title: 'TrollFace',
      type: eMediaType.image
    },
    {
      title: 'The Fellowship of the Ring',
      type: eMediaType.video
    },
    {
      title: '( ͡° ͜ʖ ͡°) / Lenny Face',
      type: eMediaType.image
    },
    {
      title: 'You Need To Calm Down',
      type: eMediaType.audio
    },
  ]);
  }
}
