/**
 * @Description:
 * @author LuHao
 * @date 2020/12/18
 */
import "./index.css"
import React, {Component} from 'react';
import Login from './component/login/index'
import New from './component/new/index'
import {connect} from 'react-redux'

// import { Button } from 'antd';
class JueJin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginFlag: true,
            login: 'none',
        };
    }

    /**
     * Notes: 显示或关闭登录页面
     * User: LuHao
     * DateTime: 2020/12/19 15:05
     */
    loginClick() {
        this.setState({
            loginFlag: !this.state.loginFlag,
            login: this.state.loginFlag ? 'flex' : 'none'
        })
    }

    render() {
        return (
            <div id="jueJin">
                <div id="title">
                    <div className="middle">
                        <img src="http://sf1-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/logo.a7995ad.svg" alt=""/>
                        <div className="titleChoice">
                            <div className="list">
                                <div>首页</div>
                                <div>沸点</div>
                                <div>小册</div>
                                <div>活动</div>
                            </div>
                            <div>
                                <div className="search">
                                    <input type="text" placeholder={"探索掘金"}/>
                                    <img src="/img/搜索.png" alt="" className="searchIcon"/>
                                </div>
                                <div className="write">
                                    <button type="primary" className="writeM">写文章</button>
                                    <button type="primary" className="writeChoice"><img src="/img/向下.png"
                                                                                        className="down" alt=""/>
                                    </button>
                                </div>
                                <div className="Sign" style={{display: this.props.id ? 'none' : 'block'}}>
                                    <button type="primary" className="in" onClick={() => {
                                        this.loginClick()
                                    }}>登录
                                    </button>
                                </div>
                                <div className="loginAfter" style={{display: this.props.id ? 'block' : 'none'}}>
                                    <svg t="1608363546068" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                         xmlns="http://www.w3.org/2000/svg" p-id="6074" width="24" height="24">
                                        <path
                                            d="M488.890676 114.623597l20.955264 0c144.664797 0 261.940804 118.29522 261.940804 264.216637 0 0 0 10.467399 0 146.44842 0 102.221126 146.68685 265.732154 146.68685 265.732154L80.263022 791.020808c0 0 146.68992-163.511028 146.68992-265.732154 0-135.981021 0-146.44842 0-146.44842C226.952942 232.918817 344.221786 114.623597 488.890676 114.623597zM604.14463 833.29461l0 73.979922c0 52.535517-42.215474 95.120404-94.298689 95.120404l-20.955264 0c-52.079122 0-94.298689-42.584887-94.298689-95.120404l0-73.979922L604.14463 833.29461zM499.368308 30.071899c34.718733 0 62.865793 28.39163 62.865793 63.412239s-28.14706 63.412239-62.865793 63.412239-62.865793-28.39163-62.865793-63.412239S464.649576 30.071899 499.368308 30.071899z"
                                            p-id="6075" fill="#707070"></path>
                                    </svg>
                                    <img src="/img/own.image" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="topic">
                    <div className="middle">
                        <li>推荐</li>
                        <li>后端</li>
                        <li>前端</li>
                        <li>Android</li>
                        <li>IOS</li>
                        <li>人工智能</li>
                        <li>开发工具</li>
                        <li>代码人生</li>
                        <li>阅读</li>
                    </div>
                </div>
                <div id="main">
                    <div className="content">
                        <div className="choice">
                            <div>热门</div>
                            |
                            <div>最新</div>|
                            <div>热榜</div>
                        </div>
                        <div className="news">
                            <New></New>
                        </div>
                    </div>
                    <div className="show">
                        <div className="section">
                            <div className='title'>掘金 - juejin.cn</div>
                            <div className='brief'>一个帮助开发者成长的社区</div>
                            <div className="tel">
                                <div>+86</div>

                                <input type="text" placeholder="请输入手机号"/>
                            </div>
                            <div className="inputBox">
                                <input type="text" placeholder="验证码"/>
                                <button>获取验证码</button>
                            </div>
                            <button>立即登录</button>
                            <div>注册登录即表示<br/>
                                同意 <span>用户协议</span> 、 <span>隐私政策</span>
                            </div>
                        </div>
                        <div className="app">
                            <img src="/img/app.png" alt=""/>
                            <div>
                                <div className="up">下载掘金客户端</div>
                                <div className="brief">一个帮助开发者成长的社区</div>
                            </div>
                        </div>
                        <div className="userHeader">
                            <div className="head">
                                <img src="/img/奖牌.png" alt=""/>作者榜
                            </div>
                            <div className="user">
                                <img src="/img/user1.image" alt=""/>
                                <div>
                                    <div className="name">jsliang</div>
                                    <div className="position">金山小前端 @投递简历</div>
                                </div>
                            </div>
                            <div className="user">
                                <img src="/img/user2.image" alt=""/>
                                <div>
                                    <div className="name">其枫</div>
                                    <div className="position">FE @ 上海</div>
                                </div>
                            </div>
                            <div className="user">
                                <img src="/img/user3.image" alt=""/>
                                <div>
                                    <div className="name">jsliang</div>
                                    <div className="position">🏆掘金签约作者 @ 微信搜：敖丙</div>
                                </div>
                            </div>
                            <div className="allUser">
                                完整榜单
                                <img src="/img/向右.png" alt=""/>
                            </div>
                        </div>
                        <div className="upDown">
                            <div>
                                <img src="/img/app1.png" alt=""/>
                                下载掘金浏览器插件
                            </div>
                            <div>
                                <img src="/img/app2.png" alt=""/>
                                前往掘金翻译计划
                            </div>
                        </div>
                    </div>
                </div>
                <Login flag={this.state.login} loginClick={this.loginClick.bind(this)}></Login>
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
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(JueJin);