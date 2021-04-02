/*
 * @Description: 
 * @Author: C-Happy
 * @Date: 2021-03-29 14:15:14
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-04-02 14:10:53
 */
const initState = {
  navLists: [
    { text: '待入驻', isClick: false },
    { text: '入驻中', isClick: true },
    { text: '已入驻', isClick: false },
    { text: '已取消', isClick: false }
  ],
  clickText: '入驻中',
  clickTextIndex: 1
}

export default ( state = initState, action) => {
  // 改变导航样式
  if (action.type === 'CHANGE_STYLE') {
    let newState = JSON.parse(JSON.stringify(state))
    for (let i = 0; i < newState.navLists.length; i++) {
      newState.navLists[i].isClick = false
    }
    newState.navLists[action.index].isClick = true
    newState.clickText = newState.navLists[action.index].text
    newState.clickTextIndex = action.index
    return newState
  }

  return state
}