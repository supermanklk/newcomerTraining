/*
 * @Description:
 * @Author: C-Happy
 * @Date: 2021-03-29 11:28:59
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-04-02 16:41:41
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import "./Side.css";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { createFromIconfontCN } from "@ant-design/icons";
import HeaderIcon from "../../pic/headerIcon.png";
import HeaderFont from "../../pic/headerFont.png";
import { getItemText } from "./action";
import axios from "axios";
import { housingInit } from "../mainRight/table/tableBody/tableHousing/action";
import { housedInit } from "../mainRight/table/tableBody/tableHoused/action";

const MyIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2453555_dzz0f5z8nou.js", // 在 iconfont.cn 上生成
});

class Side extends Component {
  constructor(props) {
    super(props);
    this.getHousingList = this.getHousingList.bind(this);
    this.getHousedList = this.getHousedList.bind(this);
  }

  handleClick = (e) => {
    this.props.getItemText(e.item.props.children[1]);
    if (this.props.clickTextIndex === 1) {
      this.getHousingList();
    } else this.getHousedList();
  };

  handleClickSubMenu(e) {
    console.log(e.title);
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
        this.props.housingInit(data);
      });
  }

  // 获取数据库数据
  async getHousedList() {
    const data = await axios
      .get("http://jzkh.happy-chen.cn/getHousedList")
      .then((res) => {
        const data = res.data;
        this.props.housedInit(data);
      });
  }

  render() {
    const { SubMenu } = Menu;
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256, height: 720 }}
        defaultSelectedKeys={["3"]}
        defaultOpenKeys={["sub2"]}
        mode="inline"
      >
        <div className="side-title">
          <img className="side-title-icon" src={HeaderIcon} />
          <img className="side-title-font" src={HeaderFont} />
        </div>
        <SubMenu
          onClick={() => this.handleClickSubMenu()}
          key="sub1"
          title="企业管理"
          icon={<MyIcon className="icon-font" type="icon-qiye-copy" />}
        ></SubMenu>
        <SubMenu
          key="sub2"
          title="筑创星管理"
          icon={<MyIcon type="icon-shangdian" />}
        >
          <Menu.Item key="3">个体户管理</Menu.Item>
          <Menu.Item key="4">个体户注销</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title="任务管理"
          icon={<MyIcon type="icon-renwu" />}
        >
          <Menu.Item key="5">任务管理</Menu.Item>
          <Menu.Item key="6">任务注销</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          title="结算管理"
          icon={<MyIcon type="icon-zhangdan" />}
        >
          <Menu.Item key="7">结算管理</Menu.Item>
          <Menu.Item key="8">结算注销</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub5"
          title="开票管理"
          icon={<MyIcon type="icon-piaoquan" />}
        ></SubMenu>
        <SubMenu
          key="sub6"
          title="账号管理"
          icon={<MyIcon type="icon-zhanghaoguanli" />}
        >
          <Menu.Item key="11">账号管理</Menu.Item>
          <Menu.Item key="12">账号注销</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clickTextIndex: state.personalManagementNav.clickTextIndex,
  };
};

const mapDispatchToProps = {
  getItemText,
  housingInit,
  housedInit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Side);
