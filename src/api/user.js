import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sysUser/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/sysUser/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/sysUser/logout',
    method: 'post'
  })
}
