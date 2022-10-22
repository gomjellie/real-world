import axios from 'axios'

export const conduitAxios = axios.create({
  baseURL: 'https://api.realworld.io/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  validateStatus: (status) => status < 500,
})
