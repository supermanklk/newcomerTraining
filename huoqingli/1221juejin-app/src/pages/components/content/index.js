import React from 'react';
import {useSelector} from 'react-redux';
import './index.css';
import download from '@assets/img/download.png'

export default function(){

    const hotListState = useSelector((state) => state.hotListReducer);

    return (
        <div className="main-container">
            <div className="main-content">
                <div className="main-content-nav">
                    <a href="#">热门</a>
                    <a href="#">最新</a>
                    <a href="#">热榜</a>
                </div>
                <div className="main-content-list">
                    {
                        hotListState.hotList.map(item => {
                            return (
                                <div className="content-list-item" key={item.id}>
                                    <div className="base-info">
                                        <span>{item.userName}</span> · <span>{item.releaseTime}</span> ·
                                        {
                                            item.keyWord.map((ele,index) => {
                                                return (
                                                    <span key={index}> {ele} / </span>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="text-title">{item.textTitle}</div>
                                    <div className="likes-comments">
                                        <div className="likes">
                                            <i className="iconfont icon-hand"></i>
                                            <span className="count">{item.likes}</span>
                                        </div>
                                        <div className="comments">
                                            <i className="iconfont icon-entypocomment"></i>
                                            <span className="count">{item.comments}</span>
                                        </div>
                                        <div className="share">
                                            <i className="iconfont icon-share"></i>
                                        </div>
                                    </div>
                                    <div className="text-img">
                                        <img className={item.imgUrl ? '' : 'hidden'} src={item.imgUrl} alt="封面图片"/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="side-bar">
                <div className="side-login">
                    <div className="title">掘金 - juejin.cn</div>
                    <div className="describe">一个帮助开发者成长的社区</div>
                    <div className="login-input">
                        <div className="phone">
                            <div className="phone-home">+86 <i className="iconfont icon-arrow-down"/></div>
                            <input type="text" placeholder="请输入手机号"/>
                        </div>
                        <div className="identify-code">
                            <input type="text" placeholder="验证码"/>
                            <div>获取验证码</div>
                        </div>
                    </div>
                    <button className="login-btn">立即登录</button>
                    <div className="agreement">
                        <div>注册登录即表示</div>
                        <div>同意 <a href="https://juejin.cn/terms">用户协议</a>、 <a href="https://juejin.cn/privacy">隐私政策</a>
                        </div>
                    </div>
                </div>

                <div className="side-download">
                    <img className="download-img" src={download} alt=""/>
                    <div className="download-tips">
                        <div className="tips-title">下载掘金客户端</div>
                        <div className="tips-desc">一个帮助开发者成长的社区</div>
                    </div>
                </div>

                <div className="side-user-block">
                    <div className="user-block-header">
                        🎖️作者榜
                    </div>
                    <div className="user-item">
                        <img className="user-avatar"
                             src="https://mirror-gold-cdn.xitu.io/168e082aad182978be4?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
                             alt=""/>
                        <div className="user-info">
                            <div className="user-name">工业聚 <span>Lv3</span> </div>
                            <div className="user-position">前端架构师</div>
                        </div>
                    </div>
                    <div className="user-item">
                        <img className="user-avatar"
                             src="https://mirror-gold-cdn.xitu.io/168e082aad182978be4?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
                             alt=""/>
                        <div className="user-info">
                            <div className="user-name">axuebin <span>Lv5</span> </div>
                            <div className="user-position">全栈 CV 工程师</div>
                        </div>
                    </div>
                    <div className="user-item">
                        <img className="user-avatar"
                             src="https://mirror-gold-cdn.xitu.io/168e082aad182978be4?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
                             alt=""/>
                        <div className="user-info">
                            <div className="user-name">敖丙 <span>Lv6</span> </div>
                            <div className="user-position">掘金签约作者</div>
                        </div>
                    </div>
                    <div className="more">
                        完整榜单 <i className="iconfont icon-right-arrow"></i>
                    </div>
                </div>

                <div className="side-link">
                    <a className="link-item" href="https://juejin.cn/book/6844733795329900551">
                        <img src="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/juejin-tutu.d58819c.png" alt=""/>
                        <div className='link-text'>掘金社区漫游指南</div>
                    </a>
                    <a className="link-item" href="https://juejin.cn/extension">
                        <img src="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png" alt=""/>
                        <div className='link-text'>下载掘金浏览器插件</div>
                    </a>
                    <a className="link-item" href="https://github.com/xitu/gold-miner">
                        <img src="https://sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/juejin-miner.b78347c.png" alt=""/>
                        <div className='link-text'>前往掘金翻译计划</div>
                    </a>
                </div>
            </div>
        </div>
    );
}