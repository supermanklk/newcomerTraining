const defaultState = {
    isLogin: false
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_LOGIN_STATE":
            return {
                ...state,
                isLogin: true
            }
        default:
            return state;
    }
}

export default reducer