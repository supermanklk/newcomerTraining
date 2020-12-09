/**
 * @Description: header 状态栏组件
 * @author 霍青利
 * @date 2020/12/8 17:55
*/
import React from 'react';

import './index.css'

import electric from '../../../../assets/img/electric.png';
import signal from '../../../../assets/img/signal.png';
import leftArrow from '../../../../assets/img/left-arrow.png';
import item from '../../../../assets/img/item-manage.png';
import search from '../../../../assets/img/search.png';
import camera from '../../../../assets/img/camera.png';

export default function Header () {
    return (
        <header>
            {/* 状态栏 */}
            <div className="status-tab">
                <div className="status-tab-left">{new Date().toLocaleTimeString().slice(0, -3)}</div>
                <div className="status-tab-right">
                    <img src={signal}/> 4G <img src={electric} alt=""/>
                </div>
            </div>
            {/* 搜索区域 */}
            <div className="search">
                <img src={leftArrow}/>
                <img src={search} className='search-icon'/>
                <input type="text" className="search-input"/>
                <img src={camera} className="search-camera"/>
                <img src={item}/>
            </div>
        </header>
    );
};