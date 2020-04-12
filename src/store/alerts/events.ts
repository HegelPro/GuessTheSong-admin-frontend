import { createEvent } from 'effector'
import { IAlert } from '../../models/alert'

export const removeAlertEvent = createEvent<IAlert>()

export const addAlertEvent = createEvent<IAlert>()

addAlertEvent.watch(payload => setTimeout(() => removeAlertEvent(payload), 3000))

