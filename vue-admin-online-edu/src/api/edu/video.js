import request from '@/utils/request'

const api_name = '/eduservice/video'

export default {

  saveVideoInfo(video) {
    return request({
      url: `${api_name}/addVideoInfo`,
      method: 'POST',
      data: video
    })
  },

  getVideoInfoById(videoId) {
    return request({
      url: `${api_name}/getVideoInfoById/${videoId}`,
      method: 'GET'
    })
  },

  updateVideoInfoById(video) {
    return request({
      url: `${api_name}/updateVideoInfo`,
      method: 'PUT',
      data: video
    })
  },

  removeById(videoId) {
    return request({
      url: `${api_name}/deleteVideoInfoById/${videoId}`,
      method: 'DELETE'
    })
  }
}