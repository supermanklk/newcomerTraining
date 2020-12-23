import {CHANGE_CHECKED, INPUT_VALUE, NEWLIST} from './actionTypes'

const defaultData = {
    myList: [
        {checked: false, value: '吃饭'},
        {checked: false, value: '睡觉'},
        {checked: false, value: '打豆豆'},
    ],
    inputValue: ''
}

export default (state = defaultData, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_CHECKED:
            newState.myList[action.value].checked = !newState.myList[action.value].checked
            return newState
        case INPUT_VALUE:
            newState.inputValue = action.value
            return newState
        case NEWLIST:
            newState.myList.push({checked: false, value: newState.inputValue})
            newState.inputValue = ''
            return newState
        default:
            return newState
    }
}
