/*
 * @Author: your name
 * @Date: 2021-03-29 21:55:17
 * @LastEditTime: 2021-03-30 15:05:28
 * @LastEditors: C-Happy
 * @Description: In User Settings Edit
 * @FilePath: \chenkaixin-assess的副本\src\components\mainRight\table\tableBody\tableHousing\housingNav\HousingNav.js
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import tableHousing from "../reducer";
import "./HousingNav.css";
import HousingNavItem from "./housingNavItem/HousingNavItem";

class HousingNav extends Component {
  render() {
    return (
      <div className="housing-header-nav">
        {this.props.housingNavs.map((item, index) => (
          <HousingNavItem key={index} navItem={item} index={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    housingNavs: state.tableHousing.housingNavs,
  };
};

export default connect(mapStateToProps, null)(HousingNav);
