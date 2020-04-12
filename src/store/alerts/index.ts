import { createStore } from 'effector'
import {addAlertEvent, removeAlertEvent} from './events'
import { append, eqProps, reject } from 'ramda'
import { IAlert } from '../../models/alert'

export const alertStore = createStore<IAlert[]>([])
  .on(addAlertEvent, (store, payload) => append(payload)(store))
  .on(removeAlertEvent, (store, payload) => reject(eqProps('id', payload))(store))
