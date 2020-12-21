const calculatorData = {
    myList: [
        {name: 'AC',color: 'rgb(165,165,165)',src: '',fontSize: 'black'},
        {name: '+/-',color: 'rgb(165,165,165)',src: '',fontSize: 'black'},
        {name: '%',color: 'rgb(165,165,165)',src: '',fontSize: 'black'},
        {name: '÷',color: 'rgb(254,158,9)',src: '',fontSize: 'white'},
        {name: '7',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
        {name: '8',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
        {name: '9',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
        {name: 'X',color: 'rgb(254,158,9)',src: '',fontSize: 'white'},
        {name: '4',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
        {name: '5',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
        {name: '6',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
        {name: '-',color: 'rgb(254,158,9)',src: '',fontSize: 'white'},
        {name: '1',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
        {name: '2',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
        {name: '3',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
        {name: '+',color: 'rgb(254,158,9)',src: '',fontSize: 'white'},
    ], // 计算器上的部分值
    expression: '', // 需要显示出的表达式，默认为0
}

export default (state = calculatorData, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type){
        case 'CALCULATOR_AC': // 按AC清空计算器
            newState.expression = ''
            return newState
        case 'ADD_TO_EXPRESSION': // 更改表达式的值
            newState.expression = action.value
            return newState
        case 'NEW_EXPRESSION': // 更改表达式的值
            newState.expression = action.value
            return newState
        default:
            return state
    }
}