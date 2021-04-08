/*
 * @Author: your name
 * @Date: 2021-03-29 22:13:17
 * @LastEditTime: 2021-04-02 14:45:18
 * @LastEditors: C-Happy
 * @Description: In User Settings Edit
 * @FilePath: \chenkaixin-assess的副本\src\components\mainRight\table\tableBody\tableHousing\housingNav\housingNavItem\HousingNavItem.js
 */
import React, { Component } from "react";
import "./HousingNavItem.css";
import { Checkbox } from "antd";
import { allChecked } from '../../action'
import { connect } from 'react-redux';
import tableHousing from '../../reducer'

class HousingNavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxStatus: false
    }
    this.onChange = this.onChange.bind(this);
  }

  // 全选
  onChange(e) {
    console.log(e.target.checked);
    this.props.allChecked(e.target.checked)
    // if (e.target.checked === true) {
    //   this.props.allChecked(e.target.checked)
    // }
  }
  
  handleChangeChecked() {
    this.setState({
      checkBoxStatus: !this.state.checkBoxStatus
    })
  }

  render() {
    return (
      <div className="housing-nav-item-body">
        <div className="housing-nav-item-checkbox">
          <Checkbox onChange={this.onChange} checked={this.state.checkBoxStatus} onClick={this.handleChangeChecked.bind(this)} />
        </div>
        <div className="housing-nav-item-personalName f-a-j">
          {this.props.navItem.personalName}
        </div>
        <div className="housing-nav-item-name f-a-j">
          {this.props.navItem.name}
        </div>
        <div className="housing-nav-item-phoneNum f-a-j">
          {this.props.navItem.phoneNum}
        </div>
        <div className="housing-nav-item-connectEnte f-a-j">
          {this.props.navItem.connectEnte}
        </div>
        <div className="housing-nav-item-result f-a-j">
          {this.props.navItem.result}
        </div>
        <div className="housing-nav-item-businessLicense f-a-j">
          {this.props.navItem.businessLicense}
        </div>
        <div className="housing-nav-item-loginAccount f-a-j">
          {this.props.navItem.loginAccount}
        </div>
        <div className="housing-nav-item-operate f-a-j">
          {this.props.navItem.operate}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    checkeds: state.tableHousing.housingNavs.checkeds
  }
}

const mapDispatchToProps = {
  allChecked
}

export default connect(mapStateToProps, mapDispatchToProps)(HousingNavItem);
