/**
 * @Description: index.js
 * @author zhangzhong
 * @date 2020/12/20
 */
import React,{Component} from 'react';
import './index.css'
import {Button,Input,AutoComplete,Select,Avatar} from 'antd';   //按需导入antd组件
import ListMsg from '../msgList/index'
import Login from '../components/loginPage/index'

const {Search} = Input;
const {Option} = Select;


class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            cardFlag: false,       //登录组件是否显示
            isLogin: false         //是否登录
        }
        this.changeFlag = this.changeFlag.bind(this);
        this.changeLogin = this.changeLogin.bind(this)
    }

    /**
     *@FunctionDes:更改登录状态
     *@Time:2020/12/20
     *
     */
    changeLogin(){
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    /**
     *@FunctionDes:更新登录组件是否显示状态
     *@Time:2020/12/20
     *
     */
    changeFlag(){
        this.setState({
            cardFlag: !this.state.cardFlag
        })
    }

    render(){
        return (
            <div className="main">
                <Login cardFlag={this.state.cardFlag} changeFlag={() => {
                    this.changeFlag()
                }} isLogin={this.state.isLogin} changeLogin={() => this.changeLogin()}/>
                <div className="header">
                    <div className="header-up">
                        <div className="header-up-nav">
                            <div className="nav-left">
                                <img src="./images/logo.svg" alt=""/>
                                <ul>
                                    <li><span className="active">首页</span></li>
                                    <li><span>沸点</span></li>
                                    <li><span>小册</span></li>
                                    <li><span>活动</span></li>
                                </ul>
                            </div>
                            <div className="nav-right">
                                <Search
                                    placeholder="探索掘金"
                                    allowClear
                                    style={{width: 166,margin: '0 10px'}}
                                />
                                <div className="button-left">写文章</div>
                                <Button style={this.state.isLogin ? {display: 'none'} : {display: "block"}}
                                        className="button-right" onClick={() => {
                                    this.changeFlag()
                                }}>登录</Button>
                                <Avatar style={this.state.isLogin ? {display: 'block'} : {display: "none"}}
                                        src='./images/mylogo.png'/>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <ul>
                            <li className="active">推荐</li>
                            <li>后端</li>
                            <li>前端</li>
                            <li>Android</li>
                            <li>iOS</li>
                            <li>人工智能</li>
                            <li>开发工具</li>
                            <li>代码人生</li>
                            <li>阅读</li>
                        </ul>
                    </div>
                </div>
                <div className="body">
                    <div className="body-main">
                        <div className="body-left">
                            <div className="left-nav">
                                <ul>
                                    <li className="active">热门</li>
                                    <li className="line">最新</li>
                                    <li>热榜</li>
                                </ul>
                            </div>
                            <ListMsg/>
                        </div>
                        <div className="body-right">
                            <div className="from">
                                <p className="title">掘金 - juejin.cn</p>
                                <p className="nav">一个帮助开发者成长的社区</p>
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
                                    />
                                </Input.Group>
                                <div className="check">
                                    <p>验证码</p>
                                    <p>获取验证码</p>
                                </div>
                                <Button type="primary" block='true'> 立即登录</Button>
                                <div className="from-bottom">
                                    <p>注册登录即表示</p>
                                    <p>同意<span>用户协议、</span><span>隐私政策</span></p>
                                </div>
                            </div>
                            <div className="download">
                                <img src="./images/3.png" alt=""/>
                                <div className="content">
                                    <p>下载掘金客户端</p>
                                    <p>一个帮助开发者成长的社区</p>
                                </div>
                            </div>
                            <div className="rank">
                                <div className="rank-nav">
                                    <img src="./images/bank.svg" alt=""/><span>作者榜</span>
                                </div>
                                <ul>
                                    <li>
                                        <Avatar size={45} src="./images/7.png"/>
                                        <span className="mid">为之漫笔</span>
                                        <img src="./images/lv2.svg" alt=""/>
                                    </li>
                                    <li>
                                        <Avatar size={45} src="./images/8.png"/>
                                        <div className="li-box">
                                            <span className="mid">tintvampirepudge</span> <img src="./images/lv3.svg"
                                                                                               alt=""/>
                                            <div className="tag">Android开发攻城狮</div>
                                        </div>
                                    </li>
                                    <li>
                                        <Avatar size={45} src="./images/9.png"/>
                                        <div className="li-box">
                                            <span className="mid">敖丙</span> <img src="./images/lv6.svg" alt=""/>
                                            <div className="tag"><img src="./images/trophy.svg" alt=""/>掘金签约作者@...</div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="rank-bottom">
                                    <p>完整榜单 <img src="./images/more.svg" alt=""/></p>
                                </div>
                            </div>
                            <div className="tools">
                                <div className="tools-list">
                                    <img src="./images/10.png" alt=""/>
                                    <p>下载掘金浏览器插件</p>
                                </div>
                                <div className="tools-list">
                                    <img src="./images/11.png" alt=""/>
                                    <p>前往掘金翻译计划</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;