import { devRequest as request } from '@/utils/http/index'

// 書本列表
export function getBooks () {
  return request({
    url: '/books',
    method: 'get'
  })
}

// 書本詳情
export function getBook (id) {
  return request({
    url: `/books/${id}`,
    method: 'get'
  })
}

// 新增書本
export function addBook (data) {
  return request({
    url: '/books',
    method: 'post',
    data
  })
}

// 編輯書本
export function editBook (id, data) {
  return request({
    url: `/books/${id}`,
    method: 'patch',
    data
  })
}
