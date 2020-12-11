import React from 'react';

import './index.css';
import downArrow from '@assets/img/down-arrow.png';
import redArrow from '@assets/img/red-down.png';
import upDown from '@assets/img/up-down.png';
import filter from '@assets/img/filter.png';

export default function TabBar() {
    return (
        <nav>
            <div className="nav-tab">
                <div className="recommend">综合推荐 <img src={downArrow}/> <img className="red-arrow" src={redArrow} /></div>
                <div className="sales">销量</div>
                <div className="price">价格 <img src={upDown} /></div>
                <div className="shop">店铺</div>
            </div>
            <div className="nav-tag">
                <div className="tag">京东物流</div>
                <div className="tag">品牌  <img src={downArrow}/></div>
                <div className="tag">适用床尺寸  <img src={downArrow}/></div>
                <div>筛选 <img src={filter} /></div>
            </div>
        </nav>
    );
}