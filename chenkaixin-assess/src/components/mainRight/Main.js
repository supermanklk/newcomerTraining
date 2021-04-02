/*
 * @Description: 
 * @Author: C-Happy
 * @Date: 2021-03-29 11:56:53
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-03-29 15:42:29
 */
import React, { Component } from 'react';
import './Main.css'
import Header from './header/Header'
import Table from './table/Table'
import { connect } from 'react-redux';
import sideClickItem from '../sideLeft/reducer'

class Main extends Component {
  render() { 
    return ( 
      <div className="main-body">
        <Header />
        <div className="main-body-navList">
          首页 / 筑创星管理 / {this.props.sideClickItem} <span>{this.props.clickText}</span>
        </div>
        <div className="main-click-text">
          {this.props.clickText}
        </div>
        <Table />
      </div>
     );
  }
}

const mapStateToProps = (state) => {
  return {
    clickText: state.personalManagementNav.clickText,
    sideClickItem: state.sideItemsClick.sideClickItem
  }
}

export default connect(mapStateToProps, null)(Main);