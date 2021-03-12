/*
 * @Description  : 
 * @Version      : 1.0
 * @Author       : 李航龙
 * @Date         : 2021-03-12 10:25:28
 * @LastEditors  : 李航龙
 * @LastEditTime : 2021-03-12 17:56:27
 * @FilePath     : \\newcomerTraining\\weibo-lihanglong-react\\src\\views\\news.js
 * Copyright (C) 2021 李航龙. All rights reserved.
 */
import React, { Component } from 'react'
import './news.css'
import NewsConent from '../component/news/newsConent'
import NewsFooter from '../component/news/newsFooter'

class News extends Component {
    constructor() {
        super()
        this.state = {
            newsTitle: "#中国灵活就业已涉及2亿多人#",
        }
    }
    render() {

        const { newsTitle } = this.state

        return (
            <div className="news-total">
                <div className="news-top">
                    <svg className="icon-news-back" aria-hidden="true">
                        <use xlinkHref="#icon-zuojiantou"></use>
                    </svg>
                    <input className="news-input" placeholder={newsTitle}></input>
                </div>

                <NewsConent />

                <NewsFooter />
            </div>
        );
    }
}

export default News