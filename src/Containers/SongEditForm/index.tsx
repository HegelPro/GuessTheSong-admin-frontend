import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useStore } from 'effector-react'
import { fork, map } from 'fluture'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'

import { TagContainer } from '../../Components/TagContainer'
import { ITag } from '../../Components/Tag'

import { getSongTask, updateSongTask } from '../../api/song'

import { setSongEvent } from './events'
import { songStore } from './store'

export const SongEditForm = () => {
  const song = useStore(songStore)
  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    getSongTask(id)
      .pipe(map(e => { console.log(e); return e }))
      .pipe(fork(() => { })((e) => setSongEvent(e)))
  }, [id])

  return (
    <FormGroup>
      <TextField
        label='Song Name'
        value={song.name}
        onChange={({ target: { value } }) => setSongEvent({ ...song, name: value })}
      />
      <TextField
        label='Author'
        value={song.author}
        onChange={({ target: { value } }) => setSongEvent({ ...song, author: value })}
      />
      <TextField
        label='Url'
        value={song.url}
        onChange={({ target: { value } }) => setSongEvent({ ...song, url: value })}
      />
      {/* <TagContainer
        tags={song.tags}
        onAddTag={(tag: ITag) => {
          if (!song.tags.includes(tag)) {
            const newTags = song.tags.concat()
            newTags.push(tag)
            song.setTags(newTags)
          }
        }}
        onDeleteTag={(tag: ITag) => {
          const newTags = tags.filter(tagElement => tagElement !== tag)
          setTags(newTags)
        }}
      /> */}
      <Button onClick={() => {
        updateSongTask(song).pipe(fork(() => { })(() => { }))
      }}>Click</Button>
    </FormGroup>
  )
}