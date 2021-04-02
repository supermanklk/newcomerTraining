/*
 * @Description: 
 * @Author: C-Happy
 * @Date: 2021-03-29 09:44:36
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-03-29 12:25:42
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'

import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
