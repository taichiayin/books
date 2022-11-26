import defaultRequest from '@/utils/http/request'

export const devRequest = async (req, errorTypes = []) => {
  const serviceApiPrefix = '/api'

  const headers = {}
  const axiosCommon = req.headers || {}
  headers['Accept-Language'] = 'zh-tw'
  req.headers = { ...axiosCommon }
  console.log(`${req.prefix || serviceApiPrefix}${req.url || ''}`)

  return defaultRequest.request({
    ...req,
    url: `${req.prefix || serviceApiPrefix}${req.url || ''}`
  })
}
