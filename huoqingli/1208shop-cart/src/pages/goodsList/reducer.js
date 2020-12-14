/**
 * @Description: 获取商品列表的 reducer
 * @author 霍青利
 * @date 2020/12/9 14:22
*/
const defaultState = {
    goodsList: []
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_GOODS_LIST':
            return {
                ...state,
                goodsList: action.data

            }
        default:
            return state;
    }

}

export default reducer;