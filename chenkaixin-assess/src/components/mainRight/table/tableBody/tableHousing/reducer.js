/*
 * @Author: C-Happy
 * @Date: 2021-03-29 22:02:09
 * @LastEditTime: 2021-04-02 14:15:53
 * @LastEditors: C-Happy
 * @Description: In User Settings Edit
 * @FilePath: \chenkaixin-assess的副本\src\components\mainRight\table\tableBody\tableHousing\reducer.js
 */
const initState = {
  housingNavs: [
    {
      personalName: "个体户名称",
      name: "姓名",
      phoneNum: "手机号",
      connectEnte: "关联企业方",
      result: "自动办理结果",
      businessLicense: "营业执照",
      loginAccount: "工商登录账号",
      operate: "操作",
      checkeds: false
    },
  ],
  showArrLen: 1,
  housingLists: [],
};

export default (state = initState, action) => {
  // 初始化数据
  if (action.type === "HOUSING_INIT") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.housingLists = action.value;
    return newState;
  }

  // 改变选中状态
  if (action.type === "CHANGE_HOUSING_STATUS") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.housingLists = action.value;
    return newState;
  }

  // 修改复选框状态
  if (action.type === "HOUSING_CHANGE_CHECKED") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.housingLists[action.index].is_checked = action.value;
    return newState;
  }

  // 前进一页
  if (action.type === "GO_HOUSING_AHEAD") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.showArrLen = newState.showArrLen + 1;
    return newState;
  }

  // 后退一页
  if (action.type === "GO_HOUSING_BACK") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.showArrLen = newState.showArrLen - 1;
    return newState;
  }

  // 跳转至多少页
  if (action.type === "JUMP_HOUSING_PAGE") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.showArrLen = action.index;
    return newState;
  }

  // 根据名字模糊查询
  if (action.type === "SEARCH_NAME") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.housingLists = action.value;
    return newState;
  }

  // 根据关联企业方模糊查询
  if (action.type === "SEARCH_CONNECT") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.housingLists = action.value;
    return newState;
  }

  // 根据手机号码准确查询
  if (action.type === "SEARCH_PHONE") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.housingLists = action.value;
    return newState;
  }

  // 根据操作结果准确查询
  if (action.type === "SEARCH_RESULT") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.housingLists = action.value;
    return newState;
  }

  // 根据营业执照上传情况进行精准查询
  if (action.type === "SEARCH_LICENCE") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.housingLists = action.value;
    return newState;
  }

  // 联合查询
  if(action.type === 'SEARCH_HOUSING_CHAIN'){
    let newState = JSON.parse(JSON.stringify(state));
    newState.housingLists = action.value;
    return newState; 
  }

  // 全选
  if (action.type === "ALL_CHECKED") {
    let newState = JSON.parse(JSON.stringify(state));
    let low = (newState.showArrLen - 1) * 10
    let high = newState.showArrLen * 10
    if (newState.housingLists.length > high) {
      for (let i = low; i < high; i++) {
        newState.housingLists[i].is_checked = action.status
      }
    } else {
      for (let i = low; i < newState.housingLists.length; i++) {
        newState.housingLists[i].is_checked = action.status
      }
    }
    return newState
  }

  return state;
};
