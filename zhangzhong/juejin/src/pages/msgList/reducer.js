/**
 * @Description: reducer.js
 * @author zhangzhong
 * @date 2020/12/20 
*/
const initState = { //state默认参数
    list: []
}
export let getreslist = (state = initState,action) => {
    switch (action.type){
        case 'GET_RES' ://接受到GET_RES，就返回请求到的list
            return {
                ...state,
                list: action.list.msg
            }
        default :
            return state
    }
};
