/*
 * @Description  : 
 * @Version      : 1.0
 * @Author       : 李航龙
 * @Date         : 2021-03-12 17:30:37
 * @LastEditors  : 李航龙
 * @LastEditTime : 2021-03-14 09:55:20
 * @FilePath     : \\newcomerTraining\\weibo-lihanglong-react\\src\\component\\news\\newsConent.js
 * Copyright (C) 2021 李航龙. All rights reserved.
 */
import React, { Component } from 'react'
import "./newsContent.css"
import imgUrl from '../../static/header.png'

class NewsConent extends Component {
    constructor() {
        super()
        this.state = {
            newsTitle: "#中国灵活就业已涉及2亿多人#",
            content: "导语： 国务院总理李克强：我们一方面继续鼓励增加相对稳定的就业岗位，另一方面也要广开灵活就业的渠道。现在，中国灵活就业已涉及2亿多人。",
        }
    }
    render() {
        const { newsTitle, content } = this.state
        const listItem = [
            { text: "综合" },
            { text: "实时" },
            { text: "热门" },
            { text: "视频" },
            { text: "图片" },
            { text: "问答" },
        ]
        return (
            <>
                <div className="news-center">
                    <div className="left">
                        <img className="header-img" src={imgUrl}></img>
                    </div>
                    <div className="right">
                        <div className="new-title">
                            {newsTitle}
                            <span className="tag-news">热搜</span>
                        </div>
                        <div className="read">阅读1.3亿 讨论7296 详情></div>
                        <div className="author">主持人：央视新闻</div>
                    </div>
                </div>

                <div className="news-content">
                    {content}
                </div>

                <div className="list-item">
                    {listItem.map((item, index) => {
                        return <div key={index} className="news-item">
                            {item.text}
                        </div>
                    })}
                    <span className="add-tag">+</span>
                </div>
            </>
        );
    }
}
export default NewsConent