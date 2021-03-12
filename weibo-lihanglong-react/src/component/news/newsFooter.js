/*
 * @Description  : 
 * @Version      : 1.0
 * @Author       : 李航龙
 * @Date         : 2021-03-12 17:30:57
 * @LastEditors  : 李航龙
 * @LastEditTime : 2021-03-12 17:51:15
 * @FilePath     : \\newcomerTraining\\weibo-lihanglong-react\\src\\component\\news\\newsFooter.js
 * Copyright (C) 2021 李航龙. All rights reserved.
 */
/*
 * @Description  : 
 * @Version      : 1.0
 * @Author       : 李航龙
 * @Date         : 2021-03-12 17:30:37
 * @LastEditors  : 李航龙
 * @LastEditTime : 2021-03-12 17:45:31
 * @FilePath     : \\newcomerTraining\\weibo-lihanglong-react\\src\\component\\news\\newsConent.js
 * Copyright (C) 2021 李航龙. All rights reserved.
 */
import React, { Component } from 'react'
import './newsFotter.css'
import imgUrlConent from '../../static/contentTop.png'
import likeqiang from '../../static/likeqiang.png'
import newsUrl from '../../static/news.png'

class NewsFooter extends Component {
    constructor() {
        super()
        this.state = {
            bigContent: `【#总理提到同时打几份工的灵活就业者#:要给他们基本保障】国务院总理李克强：我们一方面继续鼓励增加相对稳定的就业岗位,另一方面也要广开灵活就业的渠道。现在,#中国灵活就业已涉及2亿多人#。
            当然,有的人一人打几份工,很辛苦,应该给其社保补贴,提供基本的权利保障。#两会.全文`
        }
    }
    render() {
        const { bigContent } = this.state

        return (
            <>
                <div className="news-content-top">
                    <div className="top-left">
                        置顶
                    </div>
                    <div className="content-right">
                        <img className="content-top-img" src={imgUrlConent}></img>
                        <svg className="icon-news-down" aria-hidden="true">
                            <use xlinkHref="#icon-xiajiantou"></use>
                        </svg>
                    </div>
                </div>


                <div className="news-top-header">
                    <div className="top-header-left">
                        <img className="user-img" src={newsUrl} />
                        <div className="author-message">
                            <div className="user-name">央视新闻 👑</div>
                            <div className="time">6小时前 来自微博云剪 已编辑</div>
                        </div>
                    </div>
                    <div className="top-header-right">
                        + 关注
                    </div>
                </div>


                <div className="really-content">
                    {bigContent}
                </div>

                <div>
                    <img className="big-img" src={likeqiang}></img>
                </div>

                <div className="footer">
                    <input className="input-footer" placeholder="和6567人一起讨论"></input>
                    <svg className="icon-news-show" aria-hidden="true">
                        <use xlinkHref="#icon-fenxiang"></use>
                    </svg>
                    <svg className="icon-news-moremore" aria-hidden="true">
                        <use xlinkHref="#icon-more"></use>
                    </svg>
                </div>
            </>
        );
    }
}
export default NewsFooter