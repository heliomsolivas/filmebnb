import axios from 'axios'

let baseURL

baseURL = 'http://localhost:4000'

const api = axios.create({
  baseURL: baseURL
})

api.defaults.headers['Content-Type'] = 'application/json'
api.defaults.headers['Access-Control-Allow-Origin'] = '*'

export default api
