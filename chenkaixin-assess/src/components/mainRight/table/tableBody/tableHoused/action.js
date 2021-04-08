/*
 * @Description: 
 * @Author: C-Happy
 * @Date: 2021-03-30 13:49:22
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-04-02 14:13:18
 */
// 初始化数据
export function housedInit(value) {
  return {
    type: 'HOUSED_INIT',
    value
  }
}

// 跳转至指定页面
export function jumpHousedPage(index) {
  return {
    type: 'JUMP_HOUSED_PAGE',
    index
  }
}

// 后退一页
export function goHousedBack() {
  return {
    type: 'GO_HOUSED_BACK'
  }
}

// 前进一页
export function goHousedAhead() {
  return {
    type: 'GO_HOUSED_AHEAD'
  }
}

// 根据姓名查询
export function searchHousedName(value) {
  return {
    type: 'SEARCH_HOUSED_NAME',
    value
  }
}

// 根据手机号码查询
export function searchHousedPhone(value) {
  return {
    type: 'SEARCH_HOUSED_PHONE',
    value
  }
}

// 根据关联企业查询
export function searchHousedConnect(value) {
  return {
    type: 'SEARCH_HOUSED_CONNECT',
    value
  }
}

// 联合查询
export function searchHousedChain(value){
  return{
    type:"SEARCH_HOUSED_CHAIN",
    value
  }
}