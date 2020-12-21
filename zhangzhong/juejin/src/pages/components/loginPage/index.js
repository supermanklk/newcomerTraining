/**
 * @Description: index.js
 * @author zhangzhong
 * @date 2020/12/20 
*/
import React,{Component} from 'react';
import './index.css'
import {AutoComplete,Button,Input,Select,notification} from "antd";
import ImageCode from "../imageCode";


const {Option} = Select;

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgOneFlag: true,     //默认第一张登录图是显示（通过控制 display：none | block）
            imgTwoFlag: false,    //默认第二张登录图是隐藏（通过控制 display：none | block）
            value: '',            //用来存储用户输入电话号码
            code: Math.random(),  //在本地生成随机的验证码
            isLogin: false,       //用来验证登录状态
            url: './images/17.jpg',//验证图的初始图
            isCheckShow: false,    //控制滑动验证图是否显示
            isHaveCode: false       //用来验证是否已经生成验证码
        }
        this.onChangeImg = this.onChangeImg.bind(this);
        this.checkTelephone = this.checkTelephone.bind(this);
        this.changeCheckShow = this.changeCheckShow.bind(this);
    }


    /**
     *@FunctionDes:在得失焦点时切换登录loge图片的显示
     *@Time:2020/12/20
     *
     */
    onChangeImg(){
        this.setState({
            imgOneFlag: !this.state.imgOneFlag,
            imgTwoFlag: !this.state.imgTwoFlag
        })
    }

    /**
     *@FunctionDes:核实输入的电话号码时候合格
     *@Time:2020/12/20
     *
     */
    checkTelephone(){
        let phoneReg = /^1[3-578]\d{9}$/;   //匹配以1开头，第二位数为3.4.5.7.8，的第三至第十一位任意的号码
        if (phoneReg.test(this.state.value)){
            if (this.state.isHaveCode){       //判断当前是否已经生成验证码
                alert('已经发送验证码！请勿重复操作！')
            } else{
                this.changeCheckShow();  //验证号码正确，调用显示滑动验证图
                this.genValCode();       //调用生成验证码函数
            }
        } else{
            alert("输入电话号码有误！")
        }

    }

    /**
     *@FunctionDes:修改滑动验证的状态
     *@Time:2020/12/20
     *
     */
    changeCheckShow(){
        this.setState({
            isCheckShow: !this.state.isCheckShow
        })
    }

    /**
     *@FunctionDes:生成随机四位验证码
     *@Time:2020/12/20
     *
     */
    genValCode(){
        let code = Math.floor((Math.random())*10000);
        if (code < 1000){        //遇到三位数递归，直到产生四位数
            this.genValCode()
        } else{
            this.setState({   //修改已产生验证码状态
                isHaveCode: true
            })
            console.log(code)
            this.setState({
                code: code,
            })
        }
    }


    /**
     *@FunctionDes:核实是否登录
     *@Time:2020/12/20
     *
     */
    checkIsLogin(value){
        if (value*1 === this.state.code){ //验证输入验证码是否正确
            this.props.changeFlag();    //调用父级传来的函数,显示头像
            this.props.changeLogin();   //登录组件关闭
        }
    }


    /**
     *@FunctionDes://初始化验证图
     *@Time:2020/12/20
     *
     */
    componentDidMount(){
        this.setState({
            url: './images/16.jpg'
        })
    }


    /**
     *@FunctionDes://刷新验证图
     *@Time:2020/12/20
     *
     */
    onReload = () => {
        let num = this.genRandom()
        this.setState({url: './images/'+num+'.jpg'})
    }

    /**
     *@FunctionDes://刷新验证图产生随机图片
     *@Time:2020/12/20
     *
     */
    genRandom(){
        let num = Math.floor(Math.random()*10)
        if (num === 5){
            return 15
        } else if (num < 5){
            return 16
        } else{
            return 17
        }
    }

    render(){
        const openNotification = () => {//antd的提示组件方法
            if (this.props.isLogin){

                notification.open({
                    message: '登录成功！',
                });
            } else{
                console.log(this.props.isLogin)
                notification.open({
                    message: '登录失败！',
                    description:
                        '输入验证码错误！.',
                });
                this.input.state.value = '';
            }
        };
        return (
            <div id="login" style={this.props.cardFlag ? {display: 'block'} : {display: "none"}}>
                <div className="login-from">
                    <ImageCode
                        isCheckShow={this.state.isCheckShow}
                        imageUrl={this.state.url}
                        onReload={this.onReload}
                        onMatch={() => {
                            this.changeCheckShow();
                        }
                        }
                    />
                    <div className="from">
                        <img className="one-loge" style={this.state.imgOneFlag ? {display: 'block'} : {display: 'none'}}
                             id="one" src="./images/2.png" alt=""/>
                        <img className="two-loge" style={this.state.imgTwoFlag ? {display: 'block'} : {display: 'none'}}
                             id="two" src="./images/1.png" alt=""/>
                        <p className="title">手机登录</p>
                        <img onClick={() => {
                            this.props.changeFlag();
                        }
                        } className="clear" src="./images/clear.svg" alt=""/>
                        <Input.Group compact className="input">
                            <Select defaultValue="+86" style={{width: '32%'}}>
                                <Option value="+86">+86</Option>
                                <Option value="+36">+36</Option>
                                <Option value="+05">+05</Option>
                                <Option value="+89">+89</Option>
                                <Option value="+39">+39</Option>
                                <Option value="+56">+56</Option>
                            </Select>
                            <AutoComplete
                                style={{width: '68%'}}
                                placeholder="请输入手机号"
                                onFocus={() => {
                                    this.onChangeImg();
                                }
                                }
                                onBlur={() => {
                                    this.onChangeImg();
                                }
                                }
                                onChange={(value) => {
                                    this.setState({
                                        value: value
                                    })
                                }}
                            />
                        </Input.Group>
                        <div className="check">
                            <Input placeholder="验证码" bordered={false} ref={(input) => this.input = input}
                                   className="check-input"/>
                            <p onClick={
                                () => {
                                    this.checkTelephone();
                                }
                            }>获取验证码</p>
                        </div>

                        <Button onClick={
                            () => {
                                this.checkIsLogin(this.input.state.value);
                                setTimeout(() => {
                                    openNotification();
                                },50)
                            }
                        } type="primary"
                                block='true'> 登录</Button>
                        <div className="other">
                            <p>其他登录方式</p>
                        </div>
                        <div className="from-bottom">
                            <p>注册登录即表示同意<span>用户协议、</span><span>隐私政策</span></p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;