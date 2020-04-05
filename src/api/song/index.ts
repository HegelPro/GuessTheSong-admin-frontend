import { baseUrl, routes } from "../url"
import { IServer, ISong } from 'guess-the-song-contracts'
import axios, { AxiosResponse } from 'axios'
import {encaseP, map} from 'fluture'
import { prop } from "ramda"

type InList = IServer.SongApi.Get.In
type OutList = IServer.SongApi.Get.Out

// export function getSongList() {
//   return axios.get<InList, AxiosResponse<OutList>>()
// }

export const getSongListTask = encaseP(axios.get)(baseUrl + routes.songs.list)
  .pipe(map(prop('data')))

export function addSong(body: any) {
  return axios.post(`${baseUrl}${routes.songs.add}`, body)
}

export function uploadSong(formData: FormData) {
  return axios.post<FormData, AxiosResponse<string>>(`${baseUrl}${routes.songs.upload}`, formData)
}
axios.post<{ff: number}, {ff: number}>('fff', {ff: 'ggg'})

export const updateSongTask =
  encaseP((data: ISong) => axios.post(`${baseUrl}${routes.songs.base}`, data))

export const getSongTask = (id: string) => encaseP(axios.get)(`${baseUrl}${routes.songs.base}/${id}`)
  .pipe(map(prop('data')))