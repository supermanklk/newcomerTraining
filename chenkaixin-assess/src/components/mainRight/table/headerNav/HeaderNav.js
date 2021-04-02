/*
 * @Description: 
 * @Author: C-Happy
 * @Date: 2021-03-29 14:14:55
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-03-29 15:25:10
 */
import React, { Component } from 'react';
import personalManagementNav from './reducer'
import './HeaderNav.css'
import { connect } from 'react-redux'
import NavItem from './navItem/NavItem'

class HeaderNav extends Component {
  render() { 
    return ( 
      <div className="headernav-body">
        {
          this.props.navLists.map((item, index) => (
            <NavItem key={index} index={index} navList={item} />
          ))
        }
      </div>
     );
  }
}
 
const mapStateToProps = (state) => {
  return {
    navLists: state.personalManagementNav.navLists
  }
}

export default connect(mapStateToProps, null)(HeaderNav);