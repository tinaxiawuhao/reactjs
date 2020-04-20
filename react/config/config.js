//导出一个对象，暂时设置为空对象，后面再填充内容
export default {
    plugins: [
        ['umi-plugin-react', {
            dva: true, // 开启dva功能
            antd: true, // 开启Ant Design功能
        }]
    ],
    routes: [{
        path: '/',
        component: '../layouts', //配置布局路由
        routes: [ //在这里进行配置子页面
            /*{
                path: '/myTabs',
                component: './myTabs'
            },*/
            {
                path: '/user',
                routes: [
                    {
                        path: '/user/list',
                        component: './user/UserList'
                    },
                    {
                        path: '/user/add',
                        component: './user/UserAdd'
                    }
                ]
            }
        ]
    }]
};
