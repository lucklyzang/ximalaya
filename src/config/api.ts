import request from './http'

// 轮播图数据
export function fetchCarouselData(data={}) {
  return request({
    url: '/mock/11/bear/carousel',
    method: 'get',
    params: data
  })
}

// 猜你喜欢数据
export function fetchGuessData(data={}) {
  return request({
    url: '/mock/11/bear/guess',
    method: 'get',
    params: data
  })
}

// 首页列表数据
export function fetchChannelData(data={}) {
  return request({
    url: '/mock/11/bear/channel',
    method: 'get',
    params: data
  })
}