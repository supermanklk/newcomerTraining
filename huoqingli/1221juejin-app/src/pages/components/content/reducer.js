const defaultState = {
    hotList: [
        {
            id: 1,
            userName: 'jsliang',
            releaseTime: '1小时前',
            keyWord: ['面试', '求职'],
            textTitle: 'jsliang 求职系列 - 46 - 简历',
            imgUrl: '',
            likes: 9,
            comments: 1
        },
        {
            id: 2,
            userName: '掘金酱',
            releaseTime: '16天前',
            keyWord: ['前端', '后端', '程序员','Android'],
            textTitle: '🏆 掘金年度征文 | 技术人的2020',
            imgUrl: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/efe1fb78335d4fc8ba2fc8a455057c6c~tplv-k3u1fbpfcp-watermark.image',
            likes: 72,
            comments: 162
        },
        {
            id: 3,
            userName: '程序员cxuan',
            releaseTime: '1小时前',
            keyWord: ['前端', '后端'],
            textTitle: '阅站无数的我，只推荐下面这些让你起飞的',
            imgUrl: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad2853f120904eb8a56958805f29d28b~tplv-k3u1fbpfcp-watermark.image',
            likes: 11,
            comments: 0
        },
        {
            id: 4,
            userName: '徐小夕',
            releaseTime: '1小时前',
            keyWord: ['Reactjs', '前端'],
            textTitle: '如何利用Qrcode制作一个二维码生成器?',
            imgUrl: '',
            likes: 19,
            comments: 12
        },
        {
            id: 5,
            userName: '神奇的程序员',
            releaseTime: '3小时前',
            keyWord: ['面试', '求职'],
            textTitle: '使用CLI开发一个Vue3的npm库',
            imgUrl: '',
            likes: 9,
            comments: 2
        },
        {
            id: 6,
            userName: 'vipbic',
            releaseTime: '一天前',
            keyWord: ['JavaScript'],
            textTitle: '实现前端开发几个常用技巧',
            imgUrl: '',
            likes: 12,
            comments: 3
        },
        {
            id: 7,
            userName: '大转转FE',
            releaseTime: '6小时前',
            keyWord: ['Nodejs', 'JavaScript'],
            textTitle: '2020年我们可以在Node中使用ES Modules了吗',
            imgUrl: '',
            likes: 19,
            comments: 2
        },
        {
            id: 8,
            userName: 'dyhtps',
            releaseTime: '4小时前',
            keyWord: ['JavaScript'],
            textTitle: '如何手写一个JSON解析器？',
            imgUrl: '',
            likes: 9,
            comments: 12
        }

    ]
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_HOT_LIST':
            return {
                ...state,
                goodsList: state.hotList

            }
        default:
            return state;
    }

}

export default reducer;