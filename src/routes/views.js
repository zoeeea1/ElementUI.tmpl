
const indexView = q => { require(['../views/home/index'], q) };


const viewRoutes = [
    {
        name: 'home',
        path: '',
        meta: { auth: true },
        component: indexView
    }
];
export default viewRoutes;