import viewRoutes from './views';

// const mainView = q => require.ensure([], () => q(require('../views')), 'bundle');
const mainView = q => { require(['../views'], q) };

const routes = [
    {
        path: '/',
        component: mainView,
        children: viewRoutes,
        meta: { auth: true }
    },
    {
        path: '*',
        redirect: { path: '/' }
    }
];


export default routes;