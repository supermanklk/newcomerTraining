/**
 * @Description: reduce.js
 * @author zhangzhong
 * @date 2020/12/9 
*/
const initState = { //state默认参数
    list: []
}
let getRes = (state = initState,action) => {

    switch (action.type){
        case 'GET_RES' ://接受到GET_RES，就返回请求到的list
            return {
                ...state,
                list: action.list
            }
        default :
            return state
    }
};

export default getRes
