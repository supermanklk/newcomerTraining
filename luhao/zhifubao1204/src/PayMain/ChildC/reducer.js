const iniitalState = { // 定义state的状态
    num:1000,
}

//  抛出counterReducer这个方法
export function counterReducerC(state = iniitalState,action){
    // console.log(action);
    switch (action.type){
        case "addC":
            state.num--;
            return {
                num:state.num
            };
        default:
            return state;
    }
}