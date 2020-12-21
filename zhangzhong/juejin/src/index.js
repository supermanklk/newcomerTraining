/**
 * @Description: index.js
 * @author zhangzhong
 * @date 2020/12/20 
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/indexMain/index';
import './index.css';
import {Provider} from 'react-redux';
import store from "./redux";


ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>
    ,
    document.getElementById('root')
);

