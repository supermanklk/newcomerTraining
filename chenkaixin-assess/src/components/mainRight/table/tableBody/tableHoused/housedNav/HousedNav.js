/*
 * @Description:
 * @Author: C-Happy
 * @Date: 2021-03-30 14:35:51
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-03-30 15:43:46
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import "./HousedNav.css";
import HousedNavItem from "./housedNavItem/HousedNavItem";
import tableHoused from "../reducer";

class HousedNav extends Component {
  state = {};
  render() {
    return (
      <div className="housed-header-nav">
        {this.props.housedNavs.map((item, index) => (
          <HousedNavItem key={index} index={index} navItems={item} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    housedNavs: state.tableHoused.housedNavs,
  };
};

export default connect(mapStateToProps, null)(HousedNav);
