import React from 'react'
import { useStore } from 'effector-react'
import store from '../../store'
import { AlertPanelView } from '../../Components/AlertPanelView'

export const AlertPanel = () => {
  const {alerts} = useStore(store)
  return <AlertPanelView alerts={alerts} />
}