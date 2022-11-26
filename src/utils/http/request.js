import axios from 'axios'

/**
 * create an axios instance
 */
const service = axios.create({
  baseURL: '', // api 的 base_url
  headers: {
    'Content-Type': 'application/json'
  }
})

/**
 * request interceptor
 */
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

/**
 * response interceptor
 */
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log('error', error)
  }
)

// export async function _addSign () {
//   const timestamp = Date.parse(new Date())
//   const signParams = {}

//   signParams.timestamp = timestamp

//   return signParams
// }

export default service
