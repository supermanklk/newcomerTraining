const toDoList = {
    myList: [// todolist列表中复选框和内容的值
        {checkbox: false,value: '吃饭'},
        {checkbox: false,value: '睡觉'},
        {checkbox: false,value: '打豆豆'}
    ],
    inputValue: '', // input框中的内容
    placeholder: '你想做点什么'
}

export default (state = toDoList, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type){
        case 'ADD_TO_LIST':
            newState.inputValue = action.value
            return newState
        case 'BUTTON_TO_LIST':
            newState.myList.push({
                checkbox: false, value: newState.inputValue
            })
            newState.inputValue = ''
            return  newState
        default:
            return state
    }
}