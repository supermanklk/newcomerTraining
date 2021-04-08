/*
 * @Description:
 * @Author: C-Happy
 * @Date: 2021-03-29 14:24:37
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-04-02 14:17:28
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import "./Table.css";
import HeaderNav from "./headerNav/HeaderNav";
import TableHousing from "./tableBody/tableHousing/TableHousing";
import TableHoused from "./tableBody/tableHoused/TableHoused";
class Table extends Component {
  constructor(proos) {
    super(proos);
    this.changePages = this.changePages.bind(this);
  }

  // 根据点击不同导航，渲染不同页面
  changePages(index = this.props.clickTextIndex) {
    if (index === 1) {
      return (
        <div className="table-body">
          <HeaderNav />
          <TableHousing />
        </div>
      );
    } else {
      return (
        <div className="table-body">
          <HeaderNav />
          <TableHoused />
        </div>
      );
    }
  }

  render() {
    return <>{this.changePages()}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    clickTextIndex: state.personalManagementNav.clickTextIndex,
  };
};

export default connect(mapStateToProps, null)(Table);
