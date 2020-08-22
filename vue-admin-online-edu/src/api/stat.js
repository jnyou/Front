import request from '@/utils/request'

const api_name = '/staservice/stat'
export default {

    // 生成统计数据
    createStatistics(date) {
        return request({
            url: `${api_name}/${date}`,
            method: 'GET'
        })
    }
}