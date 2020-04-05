import { createEvent } from 'effector'
import { ISong } from 'guess-the-song-contracts'

export const setSongEvent = createEvent<ISong>()
