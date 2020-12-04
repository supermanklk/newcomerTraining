const iniitalState = { // 定义state的状态
    num:5,
    text:['111','22','333']
}

//  抛出counterReducer这个方法
export function counterReducerB(state = iniitalState,action){
    // console.log(action);
    switch (action.type){
        case "addB":
            state.num++;
            return {
                num:state.num
            };
        default:
            return state;
    }
}