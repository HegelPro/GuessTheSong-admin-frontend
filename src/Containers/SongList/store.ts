import { ISong } from '../../models/song'
import { createStore } from 'effector'
import { setSongListEvent } from './events'

export const SongListStore = createStore<ISong[]>([])
  .on(setSongListEvent, (_, payload) => payload)
