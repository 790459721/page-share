/*
 * @Author: zhangxr
 * @Date: 2020-07-09 12:50:17
 * @Description: 
 */ 
import fetch from '../utils/http'
export const getQueryProfile = (params) => {
    return fetch({
        url: '/queryCoursesDetails',
        method: 'get',
        params
    })
}
export const getQueryCoursesSpeech = (params) => {
    return fetch({
        url: '/queryCoursesSpeech',
        method: 'get',
        params
    })
}