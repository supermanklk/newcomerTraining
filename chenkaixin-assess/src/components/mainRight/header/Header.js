/*
 * @Description: 
 * @Author: C-Happy
 * @Date: 2021-03-29 11:59:51
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-03-29 12:05:48
 */
import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  render() { 
    return ( 
      <div className="main-header-body">
        <div className="main-header-per">
          <div className="main-header-pic"></div>
          <div className="main-header-username">用户名</div>
        </div>
      </div>
     );
  }
}
 
export default Header;