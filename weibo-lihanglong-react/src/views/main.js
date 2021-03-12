/*
 * @Description  : 
 * @Version      : 1.0
 * @Author       : 李航龙
 * @Date         : 2021-03-12 09:55:37
 * @LastEditors  : 李航龙
 * @LastEditTime : 2021-03-12 18:08:43
 * @FilePath     : \\newcomerTraining\\weibo-lihanglong-react\\src\\views\\main.js
 * Copyright (C) 2021 李航龙. All rights reserved.
 */
import React, { Component } from 'react'
import './main.css'
import imageUrl from '../static/mainTop.png'
import NewList from '../component/main/newList'

class Main extends Component {
  render() {
    const itemList = [
      { text: "热搜榜" },
      { text: "要闻榜" },
      { text: "娱乐榜" },
      { text: "同城榜" },
    ];

    return (
      <div className="main-total">
        {/* 头部 */}
        <div className="top">
          <div className="top-icon">
            <span className="left-icon">
              <svg className="icon-back" aria-hidden="true">
                <use xlinkHref="#icon-zuojiantou"></use>
              </svg>
              返回
            </span>
            <span className="right-icon">
              <svg className="icon-more" aria-hidden="true">
                <use xlinkHref="#icon-more"></use>
              </svg>
            </span>
          </div>
        </div>
        <img className="top-image" src={imageUrl} />
        {/* item切换 */}
        <div className="item-list">
          {itemList.map((item, index) => {
            return <div key={index} className="item">
              {item.text}
            </div>
          })}
        </div>
        {/* 中间内容 */}
        <div className="center-text">
          实时热点，每分钟更新一次
        </div>
        {/* 新闻列表渲染 */}
        <NewList />
        {/* 底部 */}
        <footer className="foot-tab">
          <div className="foot-item">
            <svg className="icon-search" aria-hidden="true">
              <use xlinkHref="#icon-sousuo"></use>
            </svg>
            热搜
          </div>

          <div className="foot-item">
            <svg className="icon-taolun" aria-hidden="true">
              <use xlinkHref="#icon-taolun"></use>
            </svg>
            热议
          </div>

          <div className="foot-item">
            <svg className="icon-gouwu" aria-hidden="true">
              <use xlinkHref="#icon-gouwu"></use>
            </svg>
            潮物
          </div>

          <div className="foot-item">
            <svg className="icon-paihang" aria-hidden="true">
              <use xlinkHref="#icon-paihang"></use>
            </svg>
            榜单
          </div>
        </footer>
      </div>
    );
  }
}

export default Main