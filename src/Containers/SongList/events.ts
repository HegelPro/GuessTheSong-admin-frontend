import { ISong } from '../../models/song'
import { createEvent } from 'effector'

export const setSongListEvent = createEvent<ISong[]>()
