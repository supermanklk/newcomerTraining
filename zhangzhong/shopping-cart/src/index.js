/**
 * @Description: index.js
 * @author zhangzhong
 * @date 2020/12/9
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';                             //加载样式
import Main from './pages/shoppingMain/index';   //加载父组件
import {Provider} from "react-redux";           //引入Provider
import store from "./store";                   //引入store


ReactDOM.render(
    <Provider store={store}>
        <Main></Main>
    </Provider>,document.getElementById('root')
);
