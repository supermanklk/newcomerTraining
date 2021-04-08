/*
 * @Description:
 * @Author: C-Happy
 * @Date: 2021-03-29 16:03:57
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-04-02 17:24:41
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import "./TableHousing.css";
import HousingNav from "./housingNav/HousingNav";
import HousingList from "./housingList/HousingList";
import tableHousing from "./reducer";
import {
  goHousingBack,
  goHousingAhead,
  searchName,
  searchPhone,
  searchResult,
  searchConnect,
  searchBusinessLicense,
  jumpHousingPage,
  housingInit,
  searchHousingChain,
} from "./action";
import { Input, Button, Select } from "antd";
import axios from "axios";

const { Option } = Select;

class TableHousing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BASE_URL: "http://jzkh.happy-chen.cn/",
      searchList: {
        name: "",
        phone: "",
        connect: "",
        lincense: "",
        result: "",
      },
    };
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleSearchName = this.handleSearchName.bind(this);
    this.handleSearchPhone = this.handleSearchPhone.bind(this);
    this.handleChangeResule = this.handleChangeResule.bind(this);
    this.handleSearchConnect = this.handleSearchConnect.bind(this);
    this.handleChangeBusinessLicense = this.handleChangeBusinessLicense.bind(
      this
    );
    this.getHousingList = this.getHousingList.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.HandleBatchSubmit = this.HandleBatchSubmit.bind(this);
  }

  componentDidMount() {
    this.getHousingList();
  }

  // 重置
  handleReset() {
    location.reload();
  }

  // 获取数据库数据
  async getHousingList() {
    const data = await axios
      .get(this.state.BASE_URL + "getHousingList")
      .then((res) => {
        let data = res.data;
        data = data.map((item) => {
          item.is_checked = item.is_checked == "false" ? false : true;
          return item;
        });
        this.props.housingInit(data);
      });
  }

  // 监听底部跳转至多少页输入框内容变化
  _inputChange(value) {
    this.setState({
      showArrLen: value,
    });
  }

  // 监听营业执照上传情况进行查看
  // async handleChangeBusinessLicense(value) {
  //   await axios
  //     .get(this.state.BASE_URL + "getHousingLicenseList/" + value)
  //     .then((res) => {
  //       const data = res.data;
  //       this.props.searchBusinessLicense(data);
  //     });
  // }
  handleChangeBusinessLicense(value) {
    let searchList = this.state.searchList;
    searchList.lincense = value;
    this.setState({
      searchList,
    });
  }

  // 监听操作结果的变化值
  // async handleChangeResule(value) {
  //   await axios
  //     .get(this.state.BASE_URL + "getHousingResultList/" + value)
  //     .then((res) => {
  //       const data = res.data;
  //       this.props.searchResult(data);
  //     });
  // }
  handleChangeResule(value) {
    let searchList = this.state.searchList;
    searchList.result = value;
    this.setState({
      searchList,
    });
  }

  // 传递要搜索的名字进行模糊查询
  async handleSearchName(e) {
    let name = e.target.value;
    if (e.keyCode === 13) {
      e.preventDefault();
      await axios
        .get(this.state.BASE_URL + "searchHousedName/" + name)
        .then((res) => {
          const data = res.data;
          this.props.searchName(data);
        });
    }
  }

  // 传递手机号码进行精确查询
  async handleSearchPhone(e) {
    let phoneNum = e.target.value;
    if (e.keyCode === 13) {
      e.preventDefault();
      await axios
        .get(this.state.BASE_URL + "searchPhoneNum/" + phoneNum)
        .then((res) => {
          const data = res.data;
          this.props.searchPhone(data);
        });
    }
  }

  // 传递关联企业方进行模糊查询
  async handleSearchConnect(e) {
    let ente = e.target.value;
    if (e.keyCode === 13) {
      e.preventDefault();
      await axios
        .get(this.state.BASE_URL + "searchHousingEnte/" + ente)
        .then((res) => {
          const data = res.data;
          this.props.searchConnect(data);
        });
    }
  }

  // 前进一页
  handleGoAhead() {
    this.props.goHousingAhead();
  }

  // 后退一页
  handleGoBack() {
    this.props.goHousingBack();
  }

  // 监听要跳转至的页码进行页面跳转
  handleOnKeyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (
        e.target.value <= Math.ceil(this.props.housingLists.length / 10) &&
        e.target.value > 0
      ) {
        this.props.jumpHousingPage(e.target.value);
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
  }

  // 监听手机号码变化
  handlePhone(e) {
    let searchList = this.state.searchList;
    searchList.phone = e;
    this.setState({
      searchList,
    });
  }

  // 监听联合查询变化
  handleConnect(e) {
    let searchList = this.state.searchList;
    searchList.connect = e;
    this.setState({
      searchList,
    });
  }

  // 联合查询
  async handleChainSearch() {
    const resultStr = Array.from(
      JSON.stringify(this.state.searchList).split('"')
    )
      .filter((item, key) => key % 2 === 1)
      .filter((item, key) => key % 2 === 1)
      .join("_");
    await axios
      .get(this.state.BASE_URL + "searchHousedChain/" + resultStr)
      .then((res) => {
        let data = res.data;
        if (data) {
          data = data.map((item) => {
            item.is_checked = item.is_checked == "false" ? false : true;
            return item;
          });
          this.props.searchHousingChain(data);
        }
      });
  }

  // 批量提交
  async HandleBatchSubmit() {
    let batchSubmitArr = [];
    for (let i = 0; i < this.props.housingLists.length; i++) {
      if (this.props.housingLists[i].is_checked === true) {
        batchSubmitArr.push(this.props.housingLists[i].id);
      }
    }
    let submitStr = batchSubmitArr.join("_");
    await axios.get(this.state.BASE_URL + "housedBatchSubmit/" + submitStr);
    this.getHousingList();
  }

  render() {
    return (
      <div>
        <div className="f">
          <div className="username-text f-a">姓名</div>
          <Input
            onKeyDown={(e) => this.handleSearchName(e)}
            onChange={(e) => {
              this.handleName(e.target.value);
            }}
            placeholder="请输入姓名"
            className="input-box"
          />
          <div className="phone-text f-a">手机号</div>
          <Input
            placeholder="请输入手机号"
            onKeyDown={(e) => this.handleSearchPhone(e)}
            onChange={(e) => {
              this.handlePhone(e.target.value);
            }}
            className="input-box"
          />
          <div className="firm-text f-a">关联企业方</div>
          <Input
            placeholder="请输入关联企业方"
            onKeyDown={(e) => this.handleSearchConnect(e)}
            onChange={(e) => {
              this.handleConnect(e.target.value);
            }}
            className="input-box"
          />
        </div>

        <div className="f">
          <div className="text-box m-l-1">营业执照</div>
          <Select
            placeholder="请选择"
            className="section-body"
            onChange={this.handleChangeBusinessLicense}
            style={{color: '#252525'}}
          >
            <Option value="1">查看</Option>
            <Option value="2">未上传</Option>
          </Select>

          <div className="text-box m-l-2">自动办理结果</div>
          <Select
            placeholder="请选择"
            className="section-body"
            onChange={this.handleChangeResule}
            style={{color: '#252525'}}
          >
            <Option value="1">成功</Option>
            <Option value="2">失败</Option>
          </Select>

          <Button
            onClick={this.handleChainSearch.bind(this)}
            type="primary"
            className="button-box b-m-l-1"
          >
            查询
          </Button>
          <Button onClick={this.handleReset} className="button-box b-m-l-2">
            重置
          </Button>
        </div>

        <div className="housing-btn-box">
          <div onClick={this.HandleBatchSubmit} className="btn-1 f-a-j">
            批量提交
          </div>
          <div className="btn-2 f-a-j">批量重新办理</div>
          <div className="btn-2 f-a-j">打印住所证明</div>
        </div>
        <div>
          <HousingNav />
        </div>
        <div>
          <HousingList />
        </div>
        <div className="table-housing-footer">
          <div className="table-housing-footer-left">
            共{this.props.tableHousing.housingLists.length}条记录 第{" "}
            {this.props.tableHousing.showArrLen} /{" "}
            {Math.ceil(this.props.tableHousing.housingLists.length / 10)} 页
          </div>
          <div className="table-housing-footer-right">
            <div
              className="go-back"
              onClick={() => this.handleGoBack()}
              style={{
                pointerEvents:
                  this.props.tableHousing.showArrLen > 1 ? "auto" : "none",
              }}
            >
              <svg class="zuojiantou1 icon" aria-hidden="true">
                <use xlinkHref="#icon-zuojiantou1"></use>
              </svg>
            </div>
            <div className="footer-page">
              {this.props.tableHousing.showArrLen}
            </div>
            <div
              className="go-head"
              onClick={() => this.handleGoAhead()}
              style={{
                pointerEvents:
                  this.props.tableHousing.showArrLen <
                  Math.ceil(this.props.tableHousing.housingLists.length / 10)
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
    tableHousing: state.tableHousing,
    showArrLen: state.tableHousing.showArrLen,
    housingLists: state.tableHousing.housingLists,
  };
};

const mapDispatchToProps = {
  goHousingBack,
  goHousingAhead,
  searchName,
  searchPhone,
  searchResult,
  searchConnect,
  searchBusinessLicense,
  jumpHousingPage,
  housingInit,
  searchHousingChain,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableHousing);
