/**
 * @Description: 
 * @author luhao
 * @date 2020/12/4
*/
const iniitalState = { // 定义state的状态
    num: 5,
    text: ['111', '22', '333']
}

export function counterReducerB(state = iniitalState, action) {
    switch (action.type) {
        case "addB":        //做加1操作
            state.num++;
            return {
                num: state.num
            };
        default:
            return state;
    }
}