/*
 * @Description:
 * @Author: C-Happy
 * @Date: 2021-03-30 13:50:19
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-04-02 14:42:35
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import tableHoused from "./reducer";
import {
  jumpHousedPage,
  searchHousedName,
  searchHousedPhone,
  searchHousedConnect,
  goHousedBack,
  goHousedAhead,
  housedInit,
  searchHousedChain
} from "./action";
import "./TableHoused.css";
import { Input, Button } from "antd";
import HousedNav from "./housedNav/HousedNav";
import HousedList from "./housedList/HousedList";
import axios from "axios";

class TableHoused extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BASE_URL: "http://jzkh.happy-chen.cn/",
      searchList: {
        name: "",
        phone: "",
        connect: "",
      },
    };
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleSearchName = this.handleSearchName.bind(this);
    this.handleSearchPhone = this.handleSearchPhone.bind(this);
    this.handleSearchConnect = this.handleSearchConnect.bind(this);
    this.getHousedList = this.getHousedList.bind(this);
  }

  componentDidMount() {
    this.getHousedList();
  }

  // 获取数据库数据
  async getHousedList() {
    const data = await axios
      .get(this.state.BASE_URL + "getHousedList")
      .then((res) => {
        const data = res.data;
        this.props.housedInit(data);
      });
  }

  // 监听底部跳转至多少页输入框内容变化
  _inputChange(value) {
    this.setState({
      showArrLen: value,
    });
  }

  // 传递要搜索的名字进行模糊查询
  async handleSearchName(e) {
    let name = e.target.value;
    if (e.keyCode === 13) {
      e.preventDefault();
      await axios
        .get(this.state.BASE_URL + "searchHousingName/" + name)
        .then((res) => {
          const data = res.data;
          this.props.searchHousedName(data);
        });
    }
  }

  // 传递手机号码进行精确查询
  async handleSearchPhone(e) {
    let phoneNum = e.target.value;
    if (e.keyCode === 13) {
      e.preventDefault();
      await axios
        .get(this.state.BASE_URL + "searchHousedPhoneNum/" + phoneNum)
        .then((res) => {
          let data = res.data;
          this.props.searchHousedPhone(data);
        });
    }
  }

  // 传递关联企业方进行模糊查询
  async handleSearchConnect(e) {
    let ente = e.target.value;
    if (e.keyCode === 13) {
      e.preventDefault();
      await axios
        .get(this.state.BASE_URL + "searchHousedEnte/" + ente)
        .then((res) => {
          const data = res.data;
          this.props.searchHousedConnect(data);
        });
    }
  }

  // 前进一页
  handleGoAhead() {
    this.props.goHousedAhead();
  }

  // 后退一页
  handleGoBack() {
    this.props.goHousedBack();
  }

  // 监听要跳转至的页码进行页面跳转
  handleOnKeyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (
        e.target.value <= Math.ceil(this.props.housedLists.length / 10) &&
        e.target.value > 0
      ) {
        this.props.jumpHousedPage(e.target.value);
      } else {
        alert("暂无此页");
      }
    }
  }

  // 监听姓名变化
  handleName(e) {
    let searchList = this.state.searchList;
    searchList.name = e;
    this.setState({
      searchList,
    });
    console.log(this.state.searchList);
  }

  // 监听手机号码变化
  handlePhone(e) {
    let searchList = this.state.searchList;
    searchList.phone = e;
    this.setState({
      searchList,
    });
    console.log(this.state.searchList);
  }

  // 监听关联企业方查询
  handleConnect(e) {
    let searchList = this.state.searchList;
    searchList.connect = e;
    this.setState({
      searchList,
    });
    console.log(this.state.searchList);
  }

  // 联合查询
  async handleChainSearch() {
    const resultStr = Array.from(
      JSON.stringify(this.state.searchList).split('"')
    )
      .filter((item, key) => key % 2 === 1)
      .filter((item, key) => key % 2 === 1)
      .join("_");
    console.log(resultStr);
    await axios
      .get(this.state.BASE_URL + "searchHousingChain/" + resultStr)
      .then((res) => {
        let data = res.data;
        if (data) {
          data = data.map((item) => {
            item.is_checked = item.is_checked == 'false' ? false : true;
            return item
          })
          this.props.searchHousedChain(data)
        }
      });
  }

  // 重置
  handleReload() {
    location.reload()
  }

  render() {
    return (
      <div>
        <div className="f">
          <div className="username-text f-a">姓名</div>
          <Input
            placeholder="请输入姓名"
            onKeyDown={(e) => this.handleSearchName(e)}
            className="input-box"
            onChange={(e) => {
              this.handleName(e.target.value);
            }}
          />
          <div className="phone-text f-a">手机号</div>
          <Input
            placeholder="请输入手机号"
            onKeyDown={(e) => this.handleSearchPhone(e)}
            className="input-box"
            onChange={(e) => {
              this.handlePhone(e.target.value);
            }}
          />
          <div className="firm-text f-a">关联企业方</div>
          <Input
            placeholder="请输入关联企业方"
            onKeyDown={(e) => this.handleSearchConnect(e)}
            className="input-box"
            onChange={(e) => {
              this.handleConnect(e.target.value);
            }}
          />
        </div>
        <div>
          <Button
            type="primary"
            className="button-box b-m-l-1"
            style={{ marginLeft: "930px" }}
            onClick={this.handleChainSearch.bind(this)}
          >
            查询
          </Button>
          <Button onClick={this.handleReload.bind(this)} className="button-box b-m-l-2">重置</Button>
        </div>

        <div className="housed-f">
          <div className="housed-synchronous housed-f-a-j">同步信用代码</div>
          <div className="housed-batch housed-f-a-j">批量导出开卡资料</div>
        </div>

        <div>
          <HousedNav />
        </div>
        <div>
          <HousedList />
        </div>
        <div className="table-housing-footer">
          <div className="table-housing-footer-left">
            共{this.props.housedLists.length}条记录 第 {this.props.showArrLen} /{" "}
            {Math.ceil(this.props.housedLists.length / 10)} 页
          </div>
          <div className="table-housing-footer-right">
            <div
              className="go-back"
              onClick={() => this.handleGoBack()}
              style={{
                pointerEvents: this.props.showArrLen > 1 ? "auto" : "none",
              }}
            >
              <svg class="zuojiantou1 icon" aria-hidden="true">
                <use xlinkHref="#icon-zuojiantou1"></use>
              </svg>
            </div>
            <div className="footer-page">{this.props.showArrLen}</div>
            <div
              className="go-head"
              onClick={() => this.handleGoAhead()}
              style={{
                pointerEvents:
                  this.props.showArrLen <
                  Math.ceil(this.props.housedLists.length / 10)
                    ? "auto"
                    : "none",
              }}
            >
              <svg class="zuojiantou1 icon" aria-hidden="true">
                <use xlinkHref="#icon-zuojiantou"></use>
              </svg>
            </div>
            <div className="footer-times-page">
              10条/页
              <svg class="xiajiantou_huaban icon" aria-hidden="true">
                <use xlinkHref="#icon-xiajiantou_huaban"></use>
              </svg>
            </div>
            <div className="footer-jump-pages-text">跳至</div>
            <div className="footer-jump-page">
              <input
                placeholder={this.props.showArrLen}
                ref={(input) => (this.input = input)}
                onChange={(e) => this._inputChange(e.target.value)}
                onKeyDown={(e) => this.handleOnKeyDown(e)}
              />
            </div>
            <div className="footer-jump-page-text">页</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showArrLen: state.tableHoused.showArrLen,
    housedLists: state.tableHoused.housedLists,
  };
};

const mapDispatchToProps = {
  searchHousedName,
  searchHousedPhone,
  searchHousedConnect,
  jumpHousedPage,
  goHousedBack,
  goHousedAhead,
  housedInit,
  searchHousedChain
};

export default connect(mapStateToProps, mapDispatchToProps)(TableHoused);
