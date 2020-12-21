/**
 * @Description: 头部组件
 * @author 霍青利
 * @date 2020/12/17 16:41
 */
import React,{useState} from 'react';
import './index.css';

import logo from '@assets/img/logo.png';
import Mask from '@pages/components/mask/index';
import Login from './login/index';

export default function Header(props){
    const contentNavList = props.contentNavList;
    const [hidden, setHidden] = useState(false);
    const [login, setLogin] = useState(false);

    const setChildHidden  = (value) => {
        setHidden(value);
    }

    const setChildLogin = (value) => {
        setLogin(value);
    }
    let showContent;
    if (login) {
        showContent = (<Login />)
    } else {
        showContent = (<button className="login-btn" onClick={() => setHidden(true)}>登录</button>)
    }

    return (
        <div className="header-container">
            <div className="pages-nav">
                <div className="pages-nav-left">
                    <img src={logo} alt="logo"/>
                    <div className="pages-nav-item pages-nav-first">首页</div>
                    <div className="pages-nav-item">沸点</div>
                    <div className="pages-nav-item">小册</div>
                    <div className="pages-nav-item">活动</div>
                </div>
                <div className="pages-nav-right">
                    <div className="search">
                        <input placeholder="搜索掘金"/>
                        <i className="iconfont icon--search"></i>
                    </div>
                    <button>写文章</button>
                    {showContent}
                </div>
            </div>
            <div className="content-nav">
                <div className="content-nav-list">
                    {
                        contentNavList.map((item, index) => {
                            return (
                                <a className="content-nav-item" href="#" key={index}>{item}</a>
                            )
                        })
                    }
                </div>
            </div>

            {/* mask 蒙版 */}
            <Mask hidden={hidden} setHidden={setChildHidden} login={login} setLogin={setChildLogin}/>
        </div>
    )
}