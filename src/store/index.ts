import {alertStore} from './alerts'
import { createStoreObject } from 'effector'

export default createStoreObject({
  alerts: alertStore,
})