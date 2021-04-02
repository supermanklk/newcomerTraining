/*
 * @Description: 
 * @Author: C-Happy
 * @Date: 2021-03-30 13:49:42
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-04-02 12:13:11
 */
const initState = {
  housedNavs: [
    {
      personalName: "个体户名称",
      name: "姓名",
      phoneNum: "手机号",
      connectEnte: "关联企业方",
      businessLicense: "营业执照",
      successTime: '入驻成功时间',
      operate: "操作",
    }
  ],
  showArrLen: 1,
  housedLists: []
}

export default (state = initState, action) => {
  // 初始化仓库数据
  if (action.type === "HOUSED_INIT") {
    let newState = JSON.parse(JSON.stringify(state))
    newState.housedLists = action.value
    return newState
  }

  // 前进一步
  if (action.type === "GO_HOUSED_AHEAD") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.showArrLen = newState.showArrLen + 1;
    return newState;
  }

  // 后退一步
  if (action.type === "GO_HOUSED_BACK") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.showArrLen = newState.showArrLen - 1;
    return newState;
  }

  // 跳转至指定页面
  if (action.type === 'JUMP_HOUSED_PAGE') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.showArrLen = action.index
    return newState
  }

  // 根据名字模糊查询
  if (action.type === 'SEARCH_HOUSED_NAME') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.housedLists = action.value
    return newState
  }

  // 根据关联企业方模糊查询
  if (action.type === 'SEARCH_HOUSED_CONNECT') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.housedLists = action.value
    return newState
  }

  // 根据手机号码准确查询
  if (action.type === 'SEARCH_HOUSED_PHONE') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.housedLists = action.value
    return newState
  }

  // 联合查询
  if(action.type === 'SEARCH_HOUSED_CHAIN'){
    let newState = JSON.parse(JSON.stringify(state));
    newState.housedLists = action.value;
    return newState; 
  }
  
  return state
}