//                                                          _ooOoo_
//                                                         o8888888o
//                                                         88" . "88
//                                                         (| -_- |)
//                                                          O\ = /O
//                                                      ____/`---'\____
//                                                    .   ' \\| |// `.
//                                                     / \\||| : |||// \
//                                                   / _||||| -:- |||||- \
//                                                     | | \\\ - /// | |
//                                                   | \_| ''\---/'' | |
//                                                    \ .-\__ `-` ___/-. /
//                                                 ___`. .' /--.--\ `. . __
//                                              ."" '< `.___\_<|>_/___.' >'"".
//                                             | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                                               \ \ `-. \_ __\ /__ _/ .-` / /
//                                       ======`-.____`-.___\_____/___.-`____.-'======
//                                                          `=---='
//
//                                       .............................................
//                                              佛祖保佑             永无BUG
//                                      佛曰:
//                                              写字楼里写字间，写字间里程序员；
//                                              程序人员写程序，又拿程序换酒钱。
//                                              酒醒只在网上坐，酒醉还来网下眠；
//                                              酒醉酒醒日复日，网上网下年复年。
//                                              但愿老死电脑间，不愿鞠躬老板前；
//                                              奔驰宝马贵者趣，公交自行程序员。
//                                              别人笑我忒疯癫，我笑自己命太贱；
//                                              不见满街漂亮妹，哪个归得程序员？
/**
 *  2019-05-22 make for zy
 */
import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import apis from './apis';

import configure from './configure';
import store from './store';
import routes from './routes';
import app from './app';

import http from './utils/http';
import shajs from './utils/sha';
import Base64 from './utils/base64';
import tool from './utils/tools';
import auth from './utils/auth';

Vue.use(Router);
Vue.use(ElementUI);
Vue.use(apis);


let router = new Router({ routes });

if (process.env.NODE_ENV != 'production') {
    Vue.config.devtools = true
}
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = configure;



/**
 * @description http拦截器，http状态底层处理
 */
http.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                // router.replace({ name: 'signIn' })
                break;
        }
    }
    return Promise.reject(error.response && error.response.data) // 返回接口返回的错误信息
});


router.beforeHooks.unshift((to, from, next) => {

    if (!to.matched.some(q => q.meta.auth)) {
        return next();
    }
    var authRoutes = to.matched.filter(function(route) {
        return route
            .meta
            .hasOwnProperty('auth');
    });

    let roles = authRoutes[authRoutes.length - 1].meta.auth;

    if (roles && (roles === true || roles.constructor === Array)) {

        if (!auth.isAuthenticated) {
            // router.replace({ name: 'signIn' })
            next();
        } else if (roles.constructor === Array) {
            //TODO:权限点处理
        } else {
            next();
        }
    } else {
        next();
    }
});

new Vue({ el: '#app', store, router, render: h => h(app) })