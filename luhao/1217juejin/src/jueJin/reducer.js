/**
 * @Description: 
 * @author LuHao
 * @date 2020/12/18 
*/
const initalState = { // 定义state的状态
    id:''
}

//  抛出overAll这个方法
export function overAll(state = initalState,action){
    // console.log(action);
    switch (action.type){
        case "login":
            state.id='1';
            return {
                id:state.id
            };
        default:
            return state;
    }
}