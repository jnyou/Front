import request from '@/utils/request' // 引入axios，此处封装了axios的请求和响应的结果信息

// 讲师列表（条件分页查询）
export default {
    addCourseInfo(courseInfo){
        return request({
            // 请求地址
            // 拼接参数  两种方式  1、 url: '/table/list'+ current + "/" + limit  
            // 2、↓   使用飘的符号来处理字符串
            url: `/eduservice/course/addCourseInfo`, 
            method: 'POST',
            data: courseInfo
        })
    },
    // 查询所有讲师
    getTeacherList(){
        return request({
            // 请求地址
            // 拼接参数  两种方式  1、 url: '/table/list'+ current + "/" + limit  
            // 2、↓   使用飘的符号来处理字符串
            url: `/eduservice/teacher/findAll`, 
            method: 'GET'
        })
    }
    
}
  