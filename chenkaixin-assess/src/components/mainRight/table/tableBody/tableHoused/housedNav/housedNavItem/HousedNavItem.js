/*
 * @Description:
 * @Author: C-Happy
 * @Date: 2021-03-30 14:48:07
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-03-30 15:04:16
 */
import React, { Component } from "react";
import "./HousedNavItem.css";

class HousedNavItem extends Component {
  state = {};
  render() {
    return (
      <div className="housed-nav-item-body">
        <div className="housed-nav-item-checkbox">
          <input type="checkbox" />
        </div>
        <div className="housed-nav-item-personalName housed-nav-item-f-a-j housed-public">
          {this.props.navItems.personalName}
        </div>
        <div className="housed-nav-item-name housed-nav-item-f-a-j housed-public">
          {this.props.navItems.name}
        </div>
        <div className="housed-nav-item-phoneNum housed-nav-item-f-a-j housed-public">
          {this.props.navItems.phoneNum}
        </div>
        <div className="housed-nav-item-connectEnte housed-nav-item-f-a-j housed-public">
          {this.props.navItems.connectEnte}
        </div>
        <div className="housed-nav-item-businessLicense housed-nav-item-f-a-j housed-public">
          {this.props.navItems.businessLicense}
        </div>
        <div className="housed-nav-item-successTime housed-nav-item-f-a-j housed-public">
          {this.props.navItems.successTime}
        </div>
        <div className="housed-nav-item-operate housed-nav-item-f-a-j housed-public">
          {this.props.navItems.operate}
        </div>
      </div>
    );
  }
}

export default HousedNavItem;
