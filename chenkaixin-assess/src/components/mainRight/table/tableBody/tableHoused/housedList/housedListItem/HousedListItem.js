/*
 * @Description:
 * @Author: C-Happy
 * @Date: 2021-03-30 15:14:45
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-03-31 17:51:05
 */
import React, { Component } from "react";
import "./HousedListItem.css";
import time from '../../../../../../../utils/time'

class HousedListItem extends Component {
  state = {};
  render() {
    return (
      <div className="housed-list-item-body">
        <div className="housed-list-item-checkbox">
          <input type="checkbox" />
        </div>
        <div className="housed-list-item-personalName housed-list-item-f-a-j housed-list-item-public">
          {this.props?.housedList?.personal_name}
        </div>
        <div className="housed-list-item-name housed-list-item-f-a-j housed-list-item-public">
          {this.props?.housedList?.name}
        </div>
        <div className="housed-list-item-phoneNum housed-list-item-f-a-j housed-list-item-public">
          {this.props?.housedList?.phone_num}
        </div>
        <div className="housed-list-item-connectEnte housed-list-item-f-a-j housed-list-item-public">
          {this.props?.housedList?.connect_ente}
        </div>
        <div
          className="housed-list-item-businessLicense housed-list-item-f-a-j housed-list-item-public"
          style={{ color: "#1890FF" }}
        >
          {
            this.props?.housedList?.business_license === 1 
              ? "查看" 
              : "请上传"
          }
        </div>
        <div className="housed-list-item-successTime housed-list-item-f-a-j housed-list-item-public">
          { time.gettime.gettime(this.props?.housedList?.success_time) }
        </div>
        <div className="housed-list-item-operate">
          <div className="housed-list-item-operate-detail">
            查看详情
          </div>
          <div className="housed-list-item-operate-line"></div>
          <div className="housed-list-item-operate-more">
            更多
          </div>
          <div className="housed-list-item-operate-icon">
            <svg class="icon" aria-hidden="true">
              <use xlinkHref="#icon-xiajiantou_huaban-copy"></use>
            </svg>
          </div>
          <div className="housed-list-item-hover">
            <div className="housed-list-item-hover-item">修改信息</div>
            <div className="housed-list-item-hover-item">办理注销</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HousedListItem;
