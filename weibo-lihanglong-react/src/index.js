/*
 * @Description  : 
 * @Version      : 1.0
 * @Author       : 李航龙
 * @Date         : 2021-03-12 09:55:37
 * @LastEditors  : 李航龙
 * @LastEditTime : 2021-03-12 14:36:22
 * @FilePath     : \\newcomerTraining\\weibo-lihanglong-react\\src\\index.js
 * Copyright (C) 2021 李航龙. All rights reserved.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './views/main';
import News from './views/news'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/news" component={News}></Route>
      <Route path="/" component={Main}></Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
