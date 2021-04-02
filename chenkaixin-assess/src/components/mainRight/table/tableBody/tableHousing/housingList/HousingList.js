/*
 * @Author: your name
 * @Date: 2021-03-29 22:45:08
 * @LastEditTime: 2021-04-02 10:02:42
 * @LastEditors: C-Happy
 * @Description: In User Settings Edit
 * @FilePath: \chenkaixin-assess的副本\src\components\mainRight\table\tableBody\tableHousing\housingList\HousingList.js
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import tableHousing from "../reducer";
import "./HousingList.css";
import HousingListItem from "./housingListItem/HousingListItem";

class HousingList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="housing-list-body">
        {this.props.housingLists.map((item, index) => {
          if (
            (this.props.tableHousing.showArrLen - 1) * 10 <= index &&
            index < this.props.tableHousing.showArrLen * 10
          ) {
            return (
              <HousingListItem key={index} index={index} listItem={item} is_checked = {item.is_checked} />
            );
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    housingLists: state.tableHousing.housingLists,
    tableHousing: state.tableHousing,
  };
};

export default connect(mapStateToProps, null)(HousingList);
