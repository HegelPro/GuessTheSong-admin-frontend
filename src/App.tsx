import React from 'react'
import './App.css'

import { Layout } from './Components/Layout'
import { Routers } from './Containers/Routers'
import { AlertPanel } from './Containers/AlertPanel'
import { Setup } from './Setup'

const App: React.FC = () => {
  return (
    <Setup>
      <Layout>
        <Routers />
        <AlertPanel />
      </Layout>
    </Setup>
  )
}

export default App
