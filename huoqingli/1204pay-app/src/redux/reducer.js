const defaultState = {
    redPackage: 5,
    score: 2,
    loan: 1000
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'SELECT_RED_PACKAGE':
            return {
                ...state,
                redPackage: state.redPackage + 1
            }
        case 'SELECT_SCORE':
            return {
                ...state,
                score: state.score + 1
            }
        case 'SELECT_LOAN':
            return {
                ...state,
                loan: state.loan + 1
            }
        default:
            return state
    }
}

export default reducer