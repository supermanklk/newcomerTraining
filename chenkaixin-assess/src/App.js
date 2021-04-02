/*
 * @Description:
 * @Author: C-Happy
 * @Date: 2021-03-29 09:44:36
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-03-29 11:58:19
 */
import React, { Component } from 'react';
import "./App.css";
import Side from "./components/sideLeft/Side";
import Main from './components/mainRight/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Side />
        <Main />
      </div>
    );
  }
}

export default App;
