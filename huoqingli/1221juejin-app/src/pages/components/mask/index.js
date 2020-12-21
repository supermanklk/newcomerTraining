import React,{useState, useRef, useEffect} from 'react';
import './index.css'
import loginLogo from '@assets/img/login-normal.png';
import loginLogoHidden from '@assets/img/login-hidden.png';
import SlideVerify from 'slide-verify';


export default function(props){
    const [isShow,setIsShow] = useState({
        // 控制图片的显示状态
        imgFlag: true,
        // 控制手机号输入框的border高亮显示状态
        highlightFlagPhone: false,
        // 控制验证码输入框的border高亮显示状态
        highlightFlagCode: false,
        // 输入的验证码
        inputIdentifyCode: '',
        // 生成的验证码
        identifyCode: '',
        // 是否点击获取验证码
        isClick: false,
        // 输入的手机号码
        phoneNumber: ''
    });
    const qrRef = useRef('qrRef');
    useEffect(() => {
        new SlideVerify({
            elementId: "qr-code", // DOM挂载点
            onSuccess: () => {
                alert('验证通过！')
                let code = Math.floor(Math.random()*9000+1000);
                setIsShow({
                    ...isShow,
                    isClick: false,
                    identifyCode: code + ''
                })
                console.log(code)
            }, // 成功回调
            onFail: () => {alert('验证失败，请重新验证！')}, // 失败回调
            onRefresh: () => {}, // 刷新回调
        })
    })

    // 隐藏登录页
    function changeParentValue(){
        props.setHidden(false);
    }
    function changeLogin() {
        props.setLogin(true)
    }

    // 获取验证码
    function getIdentifyCode(){
        if (isShow.phoneNumber.length !== 11 || Number(isShow.phoneNumber) === NaN){
            alert('输入的手机号有误，请重新输入');
            return
        }
        setIsShow({
            ...isShow,
            isClick: true,
        });
    }

    // 进入手机号输入框
    function focusInput(){
        setIsShow({...isShow,imgFlag: false,highlightFlagPhone: true});
    }

    // 离开手机号输入框
    function blurInput(){
        setIsShow({...isShow,imgFlag: true,highlightFlagPhone: false});
    }

    function getPhoneInputValue(e) {
        setIsShow({
            ...isShow,
            phoneNumber: e.target.value
        })
    }

    // 显示验证码框border高亮
    function showHighlightBorder(){
        setIsShow({...isShow,highlightFlagCode: true});

    }

    // 取消验证码框border高亮
    function cancelHighlightBorder(){
        setIsShow({...isShow,highlightFlagCode: false});
    }

    function getInputIdentifyCode(e){
        // console.log(e.target.value)
        setIsShow({
            ...isShow,
            inputIdentifyCode: e.target.value
        })
    }

    function confirmLogin() {
        if (isShow.phoneNumber.length !== 11 || Number(isShow.phoneNumber) === NaN) {
            alert('输入的手机号有误，请重新输入');
        } else if (isShow.inputIdentifyCode.trim() === '') {
            alert("请输入验证码！")
        } else if (isShow.inputIdentifyCode === isShow.identifyCode) {
            alert("登录成功！");
            changeLogin();
            changeParentValue();
        } else if (isShow.inputIdentifyCode !== isShow.identifyCode) {
            alert("输入的验证码有误！")
        }
    }

    return (
        <div className={props.hidden ? "mask-container" : "hidden"}>
            <div className="login-form">
                <img className="login-logo" src={isShow.imgFlag ? loginLogo : loginLogoHidden} alt=""/>
                <div className="phone-login">手机登录 <i className="iconfont icon-x" onClick={changeParentValue}/></div>
                <div className={isShow.highlightFlagPhone ? 'phone-number border-highlight' : 'phone-number'}>
                    <div>+86 <i className="iconfont icon-arrow-down"/></div>
                    <input type="text" placeholder="请输入手机号码" onChange={(e) => getPhoneInputValue(e)} onFocus={focusInput} onBlur={blurInput}/>
                </div>
                <div className={isShow.highlightFlagCode ? 'phone-code border-highlight' : 'phone-code'}>
                    <input onFocus={showHighlightBorder} onBlur={cancelHighlightBorder} onChange={(e) => getInputIdentifyCode(e)}
                           type="text" placeholder="验证码"/>
                    <button ref={qrRef} onClick={getIdentifyCode}>获取验证码</button>
                    <span id='qr-code' className={isShow.isClick? "show" : ''}></span>
                </div>

                <button className="login-btn" onClick={confirmLogin}>登录</button>
                <div className="other-login">其他登录方式</div>
                <div className="agreement-portal">注册登录即表示同意 <a href="https://juejin.cn/terms">用户协议</a>、 <a
                    href="https://juejin.cn/privacy">隐私政策</a></div>
            </div>
        </div>
    )
}