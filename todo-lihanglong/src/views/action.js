/**
 * @Description: 
 * @Version: 1.0
 * @Author: 李航龙
 * @Date: 2021-03-16 18:25:57
 * @LastEditors: 李航龙
 * @LastEditTime: Do not edit
 */
export const ADD = "ADD_TODO";
export const SUB = "SUB_TODO";
export const SUBDID = "SUB_DID"
export const CHANGEDID = "CHANGE_DID";
export const CHANGEDING = "CHANGE_DOING";
export const CLEAR = "CLEAR"

export function add(value) {
    if(localStorage.getItem("todoList")){
        localStorage.setItem('todoList',localStorage.getItem('todoList').concat(JSON.stringify(value)))
    }else {
        localStorage.setItem('todoList',JSON.stringify(value))
    }
    return {type: ADD, todo: value};
}

export function sub(index) {
    if(localStorage.getItem('todoList')){
        let arr = Array.from(localStorage.getItem('todoList').split('"').filter((item,index) => index % 2 === 1));
        arr.splice(index,1)
        localStorage.setItem('todoList',JSON.stringify(arr))
    }
    return {type: SUB, index}
};

export function subdid(index) {
    //删除DidList的值
    const didArr = Array.from(localStorage.getItem('didList').split('"').filter((item,index) => index % 2 === 1));
    didArr.splice(index,1)
    localStorage.setItem('didList',JSON.stringify(didArr))
    return {type: SUBDID, index}
};

export function changeDid(index) {
    const arr = Array.from(localStorage.getItem('todoList').split('"').filter((item,index) => index % 2 === 1));

    //删除todoList的值
    const todoArr = Array.from(localStorage.getItem('todoList').split('"').filter((item,index) => index % 2 === 1));
    todoArr.splice(index,1)
    localStorage.setItem('todoList',JSON.stringify(todoArr))


    if(localStorage.getItem("didList")){
        localStorage.setItem('didList',localStorage.getItem('didList').concat(JSON.stringify(arr[index])))
    }else {
        localStorage.setItem('didList',JSON.stringify(arr[index]))
    }
    return {type: CHANGEDID, index}
};

export function changeDoing(index) {
    const arr = Array.from(localStorage.getItem('didList').split('"').filter((item,index) => index % 2 === 1));

    //删除didList的值
    const didArr = Array.from(localStorage.getItem('didList').split('"').filter((item,index) => index % 2 === 1));
    didArr.splice(index,1)
    localStorage.setItem('didList',JSON.stringify(didArr))


    if(localStorage.getItem("todoList")){
        localStorage.setItem('todoList',localStorage.getItem('didList').concat(JSON.stringify(arr[index])))
    }else {
        localStorage.setItem('todoList',JSON.stringify(arr[index]))
    }

    return {type: CHANGEDING,index}
};


export function clear() {
    localStorage.clear();
    return {type: CLEAR};
};