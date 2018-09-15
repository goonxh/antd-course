export default {
    singular: true,  //让page（单数）变成约定的存放页面的文件夹
    routes: [{
        path: '/',
        component: 'Layout/BasicLayout',
        //indexRoute: { redirect: '/HelloWorld' },
        routes: [
            { path:'/HelloWorld', component:'HelloWorld' },
            { path:'/dashboard/analysis', component:'Dashboard/Analysis' },
            { path:'/dashboard/monitor', component:'Dashboard/Monitor' },
            { path:'/dashboard/workplace', component:'Dashboard/Workplace' },
            { path:'puzzlecards', component: './puzzlecards' },
            ],
        /*indexRoute: { component:'./src/page/HelloWorld' },
        childRoutes: [
            {
                path: 'HelloWorld',
                component: './src/page/HelloWorld'
            }
        ]*/
    }],
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true,
        }],
    ],
};