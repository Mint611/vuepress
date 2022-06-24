module.exports = {
    title: 'Paulo\'s Blog',
    description: '记录Paulo生活的地方',
    base: '/',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'paulo的博客',
                items: [
                    { text: 'link1', link: 'https://github.com/mqyqingfeng' },
                    { text: 'link2', link: 'https://juejin.cn/user/712139234359182/posts' }
                ]
            }
        ],
        sidebar: [
            {
                title: '首页',
                path: '/',
                collapsable: false, // 不折叠
            },
            {
                title: "前端",
                path: '/FE',
                collapsable: false, // 不折叠
                children: [
                    { title: "标题A", path: "/FE/a" },
                    { title: "标题B", path: "/FE/b" }
                ],
            },
            {
                title: "日常",
                path: '/daily',
                collapsable: false, // 不折叠
                children: [
                    { title: "日常A", path: "/daily/a" },
                    { title: "日常B", path: "/daily/b" }
                ],
            },
            {
                title: "运动",
                path: '/sports',
                collapsable: false, // 不折叠
                children: [
                    { title: "日常A", path: "/sports/a" },
                    { title: "日常B", path: "/sports/b" }
                ],
            },
            {
                title: "美食",
                path: '/food',
                collapsable: false, // 不折叠
                children: [
                    { title: "日常A", path: "/food/a" },
                    { title: "日常B", path: "/food/b" }
                ],
            },
        ]
    },

}