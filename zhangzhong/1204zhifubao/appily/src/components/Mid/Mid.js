/**
 * @Description: Mid.js
 * @author zhangzhong
 * @date 2020/12/4
 */
import React,{Component} from 'react';
import './Mid.css'//引入样式
import {connect} from "react-redux";//导入 connect方法实现子组件之间的通信
import {MidAdd} from './action' //导入  action唯一可以请求到store中的state

class Mid extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="mid">
                <p className="header-text">支付宝积分</p>
                <p className="price">{this.props.midNum}<span>个</span></p>
                <button onClick={this.props.MidAdd}><span>选我</span></button>
            </div>
        );
    }
}
//将store中的state映射到当前组件的props中
let mapStateToProps = (state) => {
    return {
        midNum: state.midNum
    }
}

//将当前组件的action发送到store处理
let mapDispatchToProps = (dispatch) => {

    return {
        MidAdd(){//通过dispatch发送action添加动作
            dispatch(MidAdd())
        }
    }

}
//连接store和子组件，使得可以相互通信
export default connect(mapStateToProps,mapDispatchToProps)(Mid);