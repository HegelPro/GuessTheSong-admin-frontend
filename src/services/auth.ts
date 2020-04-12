import axios from 'axios'
import {baseUrl} from '../api/url'

export const setToken = () => axios.get(`${baseUrl}/auth/access`)
  .then(({data}) => {
    axios.defaults.headers = {authorization:  `${data.token}`}
  })