import React from 'react'
import {
  Route,
  Switch,
} from 'react-router'

import { SongEditForm } from '../SongEditForm'
import { SongList } from '../SongList'

export const Routers = () => {
  return (
    <Switch>
      <Route path='/songs/create' exact>
        <SongEditForm />
      </Route>
      <Route path='/song/edit/:id' exact>
        <SongEditForm />
      </Route>
      <Route path='/songs' exact>
        <SongList />
      </Route>
    </Switch>
  )
}