/**
 * @Description: 
 * @author luhao
 * @date 2020/12/4
*/
const iniitalState = { // 定义state的状态
    num: 1000,
}

export function counterReducerC(state = iniitalState, action) {
    switch (action.type) {
        case "addC":            //做减1操作
            state.num--;
            return {
                num: state.num
            };
        default:
            return state;
    }
}