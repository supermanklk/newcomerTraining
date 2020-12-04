/**
 * @Description: reducer.js
 * @author zhangzhong
 * @date 2020/12/4 
*/
const initState={
    leftNum:5,
    midNum:2,
    rightNum:1000
}
let count = (state=initState,action) => {

    switch (action.type){
        case 'LEFT_ADD' :
            return {
                ...state,
                leftNum:state.leftNum+1
            }
        case 'MID_ADD' :
            return {
                ...state,
                rightNum:state.rightNum+1
            }
        case 'RIGHT_ADD' :
            return {
                ...state,
                midNum:state.midNum+1
            }
        default :
            return  state
    }

};
export default count
