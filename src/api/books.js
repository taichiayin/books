import { devRequest as request } from '@/utils/http/index'

export function getBooks () {
  return request({
    url: '/books',
    method: 'get'
  })
}
