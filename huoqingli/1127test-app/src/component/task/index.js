/**
 * @Description: 主页面开发
 * @author 霍青利
 * @date 2020/11/27 11:32
 */

import React,{Component} from 'react';
import {Menu,Breadcrumb,Card,Button,Space,Row,Col,Input,Tag,Table,Pagination,ConfigProvider,Layout } from 'antd';
import {
    MoneyCollectOutlined,
    AuditOutlined,
    PrinterOutlined,
    UsergroupAddOutlined,
    UserOutlined,
    MenuFoldOutlined,
    BellOutlined,
    SearchOutlined
} from '@ant-design/icons';
import './index.css';
import zhCN from 'antd/es/locale/zh_CN';

import * as FetchRequest from '../../utils/request';


const {TextArea} = Input;
const { Header, Sider, Content } = Layout;

class Task extends Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
            info: {},
            inputValue: '',
            dataSource: [],
            columns: [
                {
                    title: '筑创星',
                    dataIndex: 'business_name',
                    key: 'business_name',
                },
                {
                    title: '姓名',
                    dataIndex: 'username',
                    key: 'username',
                },
                {
                    title: '手机号',
                    dataIndex: 'tel',
                    key: 'tel',
                },
                {
                    title: '账号状态',
                    dataIndex: 'business_license',
                    key: 'business_license',
                },
                {
                    title: '报名状态',
                    dataIndex: 'certification_status',
                    key: 'certification_status',
                },
                {
                    title: '报名时间',
                    dataIndex: 'receive_time',
                    key: 'receive_time',
                },
            ]
        }
    }

    /**
     * 获取任务相关的信息
     * @author 霍青利
     * @date 2020/11/27 17:11
     *
    */
    getTaskInfo(){
        // 请求参数
        const opts = "social_credit_code=91410100317580074M&id=1365&page=1&page_number=10&taskStatus=all"
        // 请求地址
        const url = 'http://prebin.zhushang.net/zhu_pro_zb/public/index.php/api/fetchAllBUserPostedTaskAction';
        // 发送请求
        FetchRequest.post(url, opts)
            .then(res => {
                this.setState({
                    info: res.data[0],
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    /**
     * 获取报名详情的表格数据
     * @author 霍青利
     * @date 2020/11/27 17:10
     *
    */
    getRegisterInfo() {
        const params = "social_credit_code=91410100317580074M&id=1365&page=1&page_number=10";
        const url = 'http://prebin.zhushang.net/zhu_pro_zb/public/index.php/api/fetchBUserTaskEmplyeeAction';

        FetchRequest.post(url, params)
            .then(res => {
                /* 格式化对象数组 */
                const dataResource = this.formatData(res.data);
                this.setState({
                    dataSource: [...dataResource]
                })
            })
            .catch(error => {
                console.log(error)
            });
    }

    /**
     * 监听 input 搜索框的变化
     * @author 霍青利
     * @date 2020/11/27 18:41
     * @param e
    */
    handleChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }


    /**
     * 格式化对象数组
     * @author 霍青利
     * @date 2020/11/29 17:06
     * @param data
     * @return {array}
    */
    formatData(data) {
        return data.map(item => {
            const container = {};
            container['key'] = item.id
            container['business_name'] = item.business_name;
            container['username'] = item.username;
            container['tel'] = item.tel;
            container['business_license'] = item.business_license;
            container['certification_status'] = item.certification_status;
            container['receive_time'] = item.receive_time;
            return container
        })
    }

    /**
     * 搜索的方法
     * @author 霍青利
     * @date 2020/11/27 18:42
     * @param value
     *
    */
    searchInfo(value) {
        let opts = "";
        // 如果不是一个数字
        if (isNaN(value)) {
            opts = "social_credit_code=91410100317580074M&id=1365&page=1&page_number=10&taskStatus=all&username=" + value.trim();
        } else {
            opts = "social_credit_code=91410100317580074M&id=1365&page=1&page_number=10&taskStatus=all&tel=" + value.trim()
        }
        const searchUrl = 'http://prebin.zhushang.net/zhu_pro_zb/public/index.php/api/fetchBUserTaskEmplyeeAction';

        FetchRequest.post(searchUrl, opts)
            .then(res => {
                /* 格式化对象数组 */
                const dataResource = this.formatData(res.data);
                this.setState({
                    dataSource: [...dataResource]
                })
            })
            .catch(error => {
                console.log(error)
            });
    }

    onKeyup(e) {
        if (e.keyCode === 13) {
            this.searchInfo(e.target.value);
        }
    }

    componentDidMount(){
        this.getTaskInfo();
        this.getRegisterInfo();
    }

    render(){
        return (
            <div className="container">
                {/* 侧边导航 */}
                    <div className="aside-nav">
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                        >
                            <Menu.Item className="logo">
                                <img src="./logo.png" alt=""/>
                            </Menu.Item>
                            <Menu.Item key="1" icon={<AuditOutlined/>}>
                                任务中心
                            </Menu.Item>
                            <Menu.Item key="2" icon={<MoneyCollectOutlined/>}>
                                结算中心
                            </Menu.Item>
                            <Menu.Item key="3" icon={<PrinterOutlined/>}>
                                开票管理
                            </Menu.Item>
                            <Menu.Item key="4" icon={<UsergroupAddOutlined/>}>
                                筑创星管理
                            </Menu.Item>
                            <Menu.Item key="5" icon={<UserOutlined/>}>
                                用户中心
                            </Menu.Item>
                        </Menu>
                    </div>
                {/* 主体内容区域 */}
                <div className="main">
                    {/* 顶部信息 */}
                    <div className="main-top">
                        <div className="main-top-left">
                            <MenuFoldOutlined/>
                        </div>
                        <div className="main-top-right">
                            <BellOutlined/>
                            <i className="user-avatar"></i>
                            <span>用户名</span>
                        </div>
                    </div>
                    {/* 头部信息-面包屑导航 */}
                    <div className="main-header">
                        <Breadcrumb>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="/">任务中心</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>任务详情</Breadcrumb.Item>
                        </Breadcrumb>
                        <span className="text-task-details">任务详情</span>
                    </div>
                    {/* 主要内容区域 */}
                    <div className="main-content">
                        <Card className="main-content-card">
                            <div className="card-button">
                                <div className="button-left">
                                    <Button type="default">返回</Button>
                                </div>
                                <div className="button-right">
                                    <Space>
                                        <Button type="default">发起结算</Button>
                                        <Button type="default">结束任务</Button>
                                        <Button type="primary">修改任务</Button>
                                    </Space>
                                </div>
                            </div>
                            {/* 任务名称部分 */}
                            <div className="card-task">
                                <Row>
                                    <Col span={24}>
                                        <div className="task-name">
                                            <span>任务名称：{this.state.info?.task_name} <Tag
                                                color="processing">进行中</Tag></span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                        <div className="task-item">
                                            <span>任务ID：{this.state.info?.id}</span>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="task-item">
                                            <span>任务类型：{this.state.info?.task_type === 1 ? '指派任务' : '其他任务'}</span>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="task-item">
                                            <span>结算周期：{this.state.info?.current_number === 1 ? '灵活结算' : '其他方式'}</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                        <div className="task-item">
                                            <span>指定筑创星数：{this.state.info?.current_number}</span>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="task-item">
                                            <span>已报名数：{this.state.info?.current_number}</span>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="task-item">
                                            <span>任务佣金（单价）：{this.state.info?.ensure_money}</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <div className="task-item">
                                            <span>创建时间：{this.state.info?.create_time}</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <div className="task-item">
                                            <span>发布时间：{this.state.info?.audit_time}</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="task-item">
                                            <span>任务说明：</span>
                                        </div>
                                    </Col>
                                    <Col span={20}>
                                        <TextArea rows={4} value={this.state.info?.position_instructions}/>
                                    </Col>
                                </Row>
                            </div>

                            {/* 报名详情部分 */}
                            <div className="register-details">

                                <div className="register-text">报名详情</div>
                                <div className="tabs">
                                    <div className="tabs-panel">全部(3)</div>
                                    <div className="tabs-panel">已报名(2)</div>
                                    <div className="tabs-panel">待报名(1)</div>
                                </div>
                                <div className="tabs-panel-remove">已移除(1)</div>

                                <div><Input placeholder="请输入筑创星/手机号查询" onKeyUp={(e) => this.onKeyup(e)} onChange={(e) => this.handleChange(e)} suffix={<SearchOutlined onClick={() => this.searchInfo(this.state.inputValue)}/>}/></div>

                            </div>

                            {/* 报名表格 */}
                            <div className="register-table">
                                <Table
                                    columns={this.state.columns}
                                    dataSource={this.state.dataSource}
                                    className="certificate"
                                    pagination={false}
                                />
                                <div className="table-pagination">
                                    <ConfigProvider locale={zhCN}>
                                        <Pagination
                                            total={this.state.dataSource.length}
                                            showSizeChanger
                                            showQuickJumper
                                            showTotal={total => `总共 ${total} 项`}
                                        />
                                    </ConfigProvider>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task;