'use strict';
import axios from 'axios';
import env from '../configure';
const instance = axios.create({
    //  baseURL: 'https://api.meb.com',
    baseURL: env.apiHost,
    // headers: {},
    /* `paramsSerializer`是一个可选的函数，负责序列化`params`*/
    // paramsSerializer: (params) => { },
    // transformRequest: [],// 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
    // transformResponse: [], // 这里提前处理返回的数据
    // params: !accessToken ? {} : { access_token: accessToken },
    // params: {},
    // data: {},
    timeout: 1000,//设置超时时间
    // responseType: 'default', // json//返回数据类型
});


export default instance;