import { createStore } from 'effector'
import { ISong } from 'guess-the-song-contracts'
import { setSongEvent } from './events'

const initSongState: ISong = {
  id: '',
  name: '',
  author: '',
  url: '',
  tags: [],
}

export const songStore = createStore<ISong>(initSongState)
  .on(setSongEvent, (_, song) => song)
