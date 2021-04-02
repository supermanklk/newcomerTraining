/*
 * @Author: your name
 * @Date: 2021-03-29 22:54:55
 * @LastEditTime: 2021-04-02 14:34:43
 * @LastEditors: C-Happy
 * @Description: In User Settings Edit
 * @FilePath: \chenkaixin-assess的副本\src\components\mainRight\table\tableBody\tableHousing\housingList\housingListItem\HousingListItem.js
 */
import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./HousingListItem.css";
import { changeHousingStatus, housingChangeChecked } from "../../action";
import { Checkbox } from "antd";

class HousingListItem extends Component {
  constructor(props) {
    super(props);
    this.handleOnClickSubmit = this.handleOnClickSubmit.bind(this);
    this.getHousingList = this.getHousingList.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  // 提交入驻
  async handleOnClickSubmit(e) {
    let id = this.props.listItem.id;
    await axios.get("http://jzkh.happy-chen.cn/submitHousingItem/" + id);
    this.getHousingList();
  }

  // 获取数据库数据
  async getHousingList() {
    const data = await axios
      .get("http://jzkh.happy-chen.cn/getHousingList")
      .then((res) => {
        let data = res.data;
        data = data.map((item) => {
          item.is_checked = item.is_checked == "false" ? false : true;
          return item;
        });
        this.props.changeHousingStatus(data);
      });
  }

  // 获取复选框所选中的元素的id
  onChange(e) {
    let index = this.props.index;
    let value = e.target.checked;
    this.props.housingChangeChecked(value, index);
  }

  render() {
    return (
      <div className="housing-list-item-body">
        <div className="housing-list-item-checkbox">
          <Checkbox
            value={this.props.listItem.id}
            onChange={this.onChange}
            checked={this.props.is_checked}
          />
        </div>
        <div className="housing-list-item-personalName housing-list-item-f-a-j">
          {this.props?.listItem?.personal_name}
        </div>
        <div className="housing-list-item-name housing-list-item-f-a-j">
          {this.props?.listItem?.name}
        </div>
        <div className="housing-list-item-phoneNum housing-list-item-f-a-j">
          {this.props?.listItem?.phone_num}
        </div>
        <div className="housing-list-item-connectEnte housing-list-item-f-a-j">
          {this.props?.listItem?.connect_ente}
        </div>
        <div
          className="housing-list-item-result housing-list-item-f-a-j"
          style={{
            color:
              this.props?.listItem?.result === 1
                ? "rgba(0, 0, 0, 0.65)"
                : "#FF4D4F",
          }}
        >
          {this.props?.listItem?.result === 1 ? "成功" : "失败"}
        </div>
        <div
          className="housing-list-item-businessLicense housing-list-item-f-a-j"
          style={{
            color:
              this.props?.listItem?.business_license === 1
                ? "#1890FF"
                : "rgba(0,0,0,0.65)",
          }}
        >
          {this.props?.listItem?.business_license === 1 ? "查看" : "未上传"}
        </div>
        <div className="housing-list-item-loginAccount housing-list-item-f-a-j">
          {this.props?.listItem?.login_account}
        </div>
        <div className="housing-list-item-operate housing-list-item-f-a-j">
          <div
            className="housing-list-item-submit"
            style={{ color: this.props.index === 0 ? "#1890FF" : "#999999" }}
            onClick={() => this.handleOnClickSubmit()}
          >
            提交
          </div>
          <div className="housing-list-item-line"></div>
          <div className="housing-list-item-more">更多</div>
          <div className="housing-list-item-operate-icon">
            <svg class="icon" aria-hidden="true">
              <use xlinkHref="#icon-xiajiantou_huaban-copy"></use>
            </svg>
          </div>
          <div className="housing-list-item-hover">
            <div className="housing-list-item-hover-item item-1">信息录入</div>
            <div className="housing-list-item-hover-item item-2">重新办理</div>
            <div className="housing-list-item-hover-item item-2">取消入驻</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeHousingStatus,
  housingChangeChecked,
};

export default connect(null, mapDispatchToProps)(HousingListItem);
