import http from '../utils/http';

export default {
    getList(filters) {
        return http.get('order/getlist', { params: filters });
    },
    getDetai(id) {
        return http.get('order/getDetail', { params: { id: id } });
    },
};