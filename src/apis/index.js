'use strict';
import prod from './prod';
export default {
    install(Vue, options) {
        Vue.prototype.$api = {
            prod: {
                getList: prod.getList,
                getDetai: prod.getDetai
            }
        };
    }
};