/**
 * @Description: 
 * @author LuHao
 * @date 2020/12/18 
*/
const initalState = { // 定义state的状态
    num:1,
    text:[
        {
            username:'小蝴蝶',
            date:'9天前',
            tag:'后端',
            title:'JTalk Meetup 11期 | Golang 进阶指南和最佳实践',
            fabulous:'10',
            comment:'3',
            url:'/img/01.image'
        },
        {
            username:'时樾同学',
            date:'1天前',
            tag: 'JavaScript',
            title:'通过Object.defineProperty数据拦截对比，体验一下proxy有多优秀',
            fabulous:'43',
            comment:'19',
            url:'/img/02.image',
        },
        {
            username:'大转转FE',
            date:'19小时前',
            tag: 'JavaScript',
            title:'仿抖音视频全屏播放&滑动切换',
            fabulous:'36',
            comment:'13',
            url:'/img/03.image',
        },
        {
            username: '前端小灰狼',
            date:'1天前',
            tag: 'Vue.js',
            title:'后台管理系统的权限以及vue处理权限的思路',
            fabulous:'19',
            comment:'2',
            url:'/img/04.image',
        },
        {
            username: '大转转FE',
            date:'20小时前',
            tag: 'Visual Studio Code',
            title:'教你用VS Code插件实现一段五彩斑斓的伪代码',
            fabulous:'12',
            comment:'2',
            url:'/img/05.image',
        }
    ]



}

//  抛出counterReducer这个方法
export function counterReducer(state = initalState,action){
    // console.log(action);
    switch (action.type){
        default:
            return state;
    }
}