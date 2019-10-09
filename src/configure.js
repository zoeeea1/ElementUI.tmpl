const env = process.env.NODE_ENV;
//默认正式环境地址
const conf = {
    apiHost: '',
};

//开发环境
if (env == 'development') {
    conf.apiHost = '';
}

//测试环境
if (env == 'staging') {
    conf.apiHost = '';
}

module.exports = conf