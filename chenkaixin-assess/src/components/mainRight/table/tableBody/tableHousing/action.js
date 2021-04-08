/*
 * @Description: 
 * @Author: C-Happy
 * @Date: 2021-03-30 11:09:25
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-04-02 14:15:25
 */
// 数据初始化类型
export function housingInit(value) {
  return {
    type: 'HOUSING_INIT',
    value
  }
}

// 修改入驻状态
export function changeHousingStatus(value) {
  return {
    type: 'CHANGE_HOUSING_STATUS',
    value
  }
}

// 跳转至指定页面类型
export function jumpHousingPage(index) {
  return {
    type: 'JUMP_HOUSING_PAGE',
    index
  }
}


// 后退一步
export function goHousingBack() {
  return {
    type: 'GO_HOUSING_BACK'
  }
}

// 前进一步
export function goHousingAhead() {
  return {
    type: 'GO_HOUSING_AHEAD'
  }
}

// 根据名字模糊查询
export function searchName(value) {
  return {
    type: 'SEARCH_NAME',
    value
  }
}

// 根据手机号码精确查询
export function searchPhone(value) {
  return {
    type: 'SEARCH_PHONE',
    value
  }
}

// 根据关联企业方模糊查询
export function searchConnect(value) {
  return {
    type: 'SEARCH_CONNECT',
    value
  }
}

// 根据操作结果查询
export function searchResult(value) {
  return {
    type: 'SEARCH_RESULT',
    value
  }
}

// 根据营业执照查询
export function searchBusinessLicense(value) {
  return {
    type: 'SEARCH_LICENCE',
    value
  }
}

// 联合查询
export function searchHousingChain(value){
  return{
    type:"SEARCH_HOUSING_CHAIN",
    value
  }
}

// 传递复选框状态
export function housingChangeChecked(value, index) {
  return {
    type: 'HOUSING_CHANGE_CHECKED',
    value,
    index
  }
}

// 全选
export function allChecked(status) {
  return {
    type: 'ALL_CHECKED',
    status
  }
}