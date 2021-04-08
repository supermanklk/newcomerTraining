/*
 * @Description: 
 * @Author: C-Happy
 * @Date: 2021-03-29 15:28:34
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-03-29 15:48:32
 */
const initState = {
  sideClickItem: '个体户管理 /'
}

export default (state = initState, action) => {

  if (action.type === 'GET_ITEM_TEXT') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.sideClickItem = action.value + ' /'
    return newState
  }

  return state
}