import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getSongListTask } from '../../api/song'

import { routes } from '../../api/url'
import { fork } from 'fluture'
import { identical } from 'ramda'

import { useStore } from 'effector-react'
import { List, ListItem, Icon } from '@material-ui/core'
import { SongListStore } from './store'
import { setSongListEvent } from './events'

export const SongList = () => {
  const songList = useStore(SongListStore)
  useEffect(() => {
    getSongListTask
      .pipe(fork(identical)(setSongListEvent))
  }, [])

  return (
    <React.Fragment>
      <List>
        {songList.map(song => (
          <ListItem key={song.id}>
            {song.name}
            <Link to={`${routes.songs.edit}/${song.id}`}>
              <Icon>edit</Icon>
            </Link>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  )
}