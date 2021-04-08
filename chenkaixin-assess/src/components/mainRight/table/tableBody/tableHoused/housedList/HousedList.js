/*
 * @Description:
 * @Author: C-Happy
 * @Date: 2021-03-30 15:09:28
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-03-31 15:00:14
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import tableHoused from "../reducer";
import "./HousedList.css";
import HousedListItem from "./housedListItem/HousedListItem";
import axios from 'axios'
import HousingListItem from "../../tableHousing/housingList/housingListItem/HousingListItem";

class HousedList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      housedlist: []
    }
  }

  render() {
    return (
      <div className="housed-list-body">
        {this.props.housedLists.map((item, index) => {
          if (
            (this.props.showArrLen - 1) * 10 <= index &&
            index < this.props.showArrLen * 10
          ) {
            return (
              <HousedListItem key={index} index={index} housedList={item} />
            );
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    housedLists: state.tableHoused.housedLists,
    showArrLen: state.tableHoused.showArrLen,
  };
};

export default connect(mapStateToProps, null)(HousedList);
