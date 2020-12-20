/**
 * @Description:
 * @author LuHao
 * @date 2020/12/9
 */
const iniitalState = {
    commodity: [],
}

export function counterReducer(state = iniitalState, action) {
    switch (action.type) {
        case 'write':
            state.commodity = action.res
            return {
                commodity: action.res
            };
        default:
            return state;
    }
}