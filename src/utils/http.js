/*
 * @Author: zhangxr
 * @Date: 2020-07-09 09:28:16
 * @Description: 
 */ 
import axios from 'axios'
import queryString from 'query-string'
console.log(process.env)
const REACT_APP_ENV = process.env.REACT_APP_ENV
const conf = {
    development: 'http://test.api.health.dasurebao.com/api/wx/h5',
    location: 'http://test.api.health.dasurebao.com/api/wx/h5',
    // location: 'http://192.168.1.152:8888/api/wx/h5',
    production: 'http://m.mwee.cn'
}
const fetch = axios.create({
    baseURL: conf[REACT_APP_ENV],
    // timeout: 10000
})
fetch.defaults.headers.post['Content-Type'] = 'application/json'
fetch.interceptors.request.use(config => {
    console.log('config',config)
    if(['post', 'put', 'delete'].includes(config.method)) {
        if(typeof(config.data) !== 'string' && config.headers['Content-Type'] !== 'multipart/form-data') {
            config.data = queryString.stringify(config.data)
        }
    }
    return config
}, error => {
    Promise.reject(error)
})
fetch.interceptors.response.use(async data => {
    // console.log('data',data)
    return data
}, error => {
    if(error.response) {
        if(error.response.status === 500) {
            console.log('错误')
        }
        return Promise.reject(error.response.data)
    }else {
        return Promise.reject(error)
    }
})
export default fetch