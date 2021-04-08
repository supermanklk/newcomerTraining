/*
 * @Description:
 * @Author: C-Happy
 * @Date: 2021-03-29 14:32:00
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-03-30 14:14:30
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import "./NavItem.css";
import { changeStyle } from "../action";

class NavItem extends Component {
  constructor(props) {
    super(props)
  }

  // 点击Nav将索引传到reducer中
  handleClickChange() {
    this.props.changeStyle(this.props.index);
  }

  render() {
    return (
      <div
        onClick={() => this.handleClickChange()}
        className={
          this.props.navList.isClick === true ? "click-style" : "navitem-body"
        }
      >
        {this.props.navList.text}
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeStyle,
};

export default connect(null, mapDispatchToProps)(NavItem);
