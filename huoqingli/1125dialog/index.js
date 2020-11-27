/**
 * author：霍青利
 * time： 2020年11月25日
 * */

// 获取弹出框
let dialog = document.getElementById('dialog');
// 获取原密码输入框
let oldPwdInput = document.getElementById('old-password');
// 获取原密码提示元素
let oldPwdWarn = document.getElementById('old-pwd-tip');
// 获取新密码输入框
let newPwdInput = document.getElementById('new-password');
// 获取新密码提示元素
let newPwdWarn = document.getElementById('new-pwd-tip');
// 获取确认密码输入框
let confirmPwdInput = document.getElementById('confirm-password');
// 获取确认密码提示元素
let confirmPwdWarn = document.getElementById('confirm-pwd-tip');

/**
 * 点击按钮显示对话框
 * */
function editPwd(){
    dialog.style.display = 'block';
}

/**
 * 封装警示信息函数
 * */
function setWarningShow(element, status) {
    return element.style.visibility = status;
}

/**
 * 关闭弹出框的代码
 * */
function closeEdit(){
    dialog.style.display = 'none';
    // 隐藏所有的错误信息
    setWarningShow(oldPwdWarn, 'hidden');
    setWarningShow(newPwdWarn, 'hidden');
    setWarningShow(confirmPwdWarn, 'hidden');
    // 将原表单中的 value 置空
    oldPwdInput.value = '';
    newPwdInput.value = '';
    confirmPwdInput.value = '';
}
/**
 * 原密码输入框失去焦点时提示信息
 * */
function oldPwdBlur(){
    let oldPwd = oldPwdInput.value;
    // 如果输入空字符串或者密码不正确，则提示错误信息
    if (!oldPwd.trim() || oldPwd !== '123456'){
        setWarningShow(oldPwdWarn, 'visible')
    } else{
        setWarningShow(oldPwdWarn, 'hidden')
    }
}
/**
 * 新密码输入框失去焦点时提示信息
 * */
function newPwdBlur(){
    let newPwd = newPwdInput.value;
    // 非数字和字母的正则
    let reg = /\W/g;
    // 如果是非数字或字母，则提示错误信息
    if (reg.test(newPwd)){
        setWarningShow(newPwdWarn, 'visible')
    } else {
        setWarningShow(newPwdWarn, 'hidden')
    }
}

/**
 * 确认密码输入框失去焦点时提示信息
 * */
function confirmPwdBlur(){
    let newPwd = newPwdInput.value;
    let confirmPwd = confirmPwdInput.value;
    // 如果新旧密码不一致，则提示错误信息
    if (confirmPwd !== newPwd){
        setWarningShow(confirmPwdWarn, 'visible')
    } else{
        setWarningShow(confirmPwdWarn, 'hidden')
    }
}

/**
 * 点击确认按钮时根据表单内容提示信息
 * */
function confirm(){
    // 获取最新输入的密码
    let oldPwd = oldPwdInput.value;
    let newPwd = newPwdInput.value;
    let confirmPwd = confirmPwdInput.value;
    // 如果有任何一个输入框为输入内容，则提示对应的信息
    if (!oldPwd.trim() || !newPwd.trim() || !confirmPwd.trim()){
        return alert('请完善表单内容再提交！')
    // 如果所有的表单都没有错误提示，则提示修改成功，同时关闭弹出框
    } else if (oldPwdWarn.style.visibility === 'hidden'
        && newPwdWarn.style.visibility === 'hidden'
        && confirmPwdWarn.style.visibility === 'hidden'){
        alert('修改成功！')
        closeEdit();
    } else{
        alert('请输入正确的信息！')
    }
}
