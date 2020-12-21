/**
 * @Description:
 * @author LuHao
 * @date 2020/12/18
 */
import React, {Component} from 'react';
import './index.css'
import {connect} from "react-redux";
import {login} from "../../action"

class Login extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.myTel = React.createRef();
        this.state = {
            iconFirst: 'block',
            iconSecond: 'none',
            validation: ''
        }
    }

    /**
     * Notes: 显示熊猫举手
     * User: LuHao
     * DateTime: 2020/12/19 15:03
     */
    iconClickFirst() {
        this.setState({
            iconFirst: 'none',
            iconSecond: 'block',
        })
    }

    /**
     * Notes: 显示熊猫趴着
     * User: LuHao
     * DateTime: 2020/12/19 15:04
     */
    iconClickSecond() {
        this.setState({
            iconFirst: 'block',
            iconSecond: 'none',
        })
    }

    /**
     * Notes: 生成验证码，并打印出来
     * User: LuHao
     * DateTime: 2020/12/19 15:04
     */
    getValidation = async () => {
        await this.setState({
            validation: Math.random().toString(36).substr(2, 4)
        })
        this.showValidation()
    }

    /**
     * Notes: 打印验证码
     * User: LuHao
     * DateTime: 2020/12/19 15:05
     */
    showValidation() {
        console.log(this.state.validation);
    }

    /**
     * Notes: 登录验证，验证输入内容是否与验证码一致
     * User: LuHao
     * DateTime: 2020/12/19 15:15
     */
    login() {
        if ((this.myRef.current.value === this.state.validation) && (this.state.validation !== '') && (this.myTel.current.value !== '')) {
            this.props.login()
            this.props.loginClick()
            this.myRef.current.value = ''
        }
    }

    render() {
        return (
            <div>
                <div id="login" style={{display: this.props.flag}}>
                    <div className="main">
                        <img className="img" src="/img/icon1.png" alt="" style={{display: this.state.iconFirst}}/>
                        <img className="img2" src="/img/icon2.png" alt="" style={{display: this.state.iconSecond}}/>
                        <div className="title">
                            手机登录
                            <a href="#" className="close" onClick={() => {
                                this.props.loginClick()
                            }}></a>
                        </div>
                        <div className="tel" onFocus={() => {
                            this.iconClickFirst()
                        }} onBlur={() => {
                            this.iconClickSecond()
                        }}>
                            <div>+86</div>
                            <input type="text" placeholder="请输入手机号" ref={this.myTel}/>
                        </div>
                        <div className="inputBox">
                            <input type="text" placeholder="验证码" ref={this.myRef}/>
                            <button onClick={() => {
                                this.getValidation()
                            }}>获取验证码
                            </button>
                        </div>
                        <button onClick={() => {
                            this.login()
                        }}>登录
                        </button>
                        <div className="other">其他登录方式</div>
                        <div>注册登录即表示同意 <span>用户协议</span>、<span>隐私政策</span></div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.overAll.id
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //登录判定  执行取消登录按键
        login: () => {
            dispatch(login())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
