const iniitalState = { // 定义state的状态
    num:1,
    text:['111','22','333']
}

//  抛出counterReducer这个方法
export function counterReducer(state = iniitalState,action){
    // console.log(action);
    switch (action.type){
        case "add":
            state.num++;
            return {
                num:state.num
            };
        default:
            return state;
    }
}