/**
 * @Description: index.js
 * @author zhangzhong
 * @date 2020/12/4
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./Main";
import './index.css'
import store from "./store";
import {Provider} from 'react-redux'



ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>
        ,
    document.getElementById('root')
);

