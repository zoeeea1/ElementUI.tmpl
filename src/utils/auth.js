'use strict';

function Auth(options) {
    var self = this;

    this.install = function (Vue, options) {
        Object.defineProperties(Vue.prototype, {
            $auth: {
                get: function () {
                    return self;
                }
            }
        });
    }
}


Object.defineProperties(Auth.prototype, {

    userId: {
        get: function () {
            return JSON.parse(window.localStorage.getItem("auth_admin_access_user"));
        },
        set: function (v) {

            if (v && v != null) {
                window.localStorage.setItem("auth_admin_access_user", JSON.stringify(v));
            } else {
                window.localStorage.removeItem("auth_admin_access_user");
            }
        }
    },
    token: {
        get: function () {
            return JSON.parse(window.localStorage.getItem("auth_admin_access_token"));
        },
        set: function (v) {
            if (v && v != null) {
                window.localStorage.setItem("auth_admin_access_token", JSON.stringify(v));
            } else {
                window.localStorage.removeItem("auth_admin_access_token");
            }
        }
    },
    isAuthenticated: {
        get: function () {
            var accesstoken = this.token;

            return accesstoken ? true : false;
        }
    },
    isExpired: {
        get: function () {
            var accesstoken = this.token;

            return accesstoken && accesstoken.now + accesstoken.expiresIn * 1000 < Date.now();
        }
    }
})




// export default {

// };
const auth = new Auth();

export default auth;