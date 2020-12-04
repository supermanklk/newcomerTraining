/**
 * @Description: Right.js
 * @author zhangzhong
 * @date 2020/12/4 
*/
import React,{Component} from 'react';
import './Right.css' //引入样式
import {RightAdd} from './action'   //导入  action唯一可以请求到store中的state
import {connect} from "react-redux"; //导入 connect方法实现子组件之间的通信

/**
*@Des:子组件Right
*@Time:2020/12/4
*
*/
class Right extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="right">
                <p className="header-text">网商贷免息</p>
                <p className="price">{this.props.rightNum}<span>元</span></p>
                <button onClick={this.props.RightAdd}>
                    <span>选我</span>
                </button>
            </div>
        );
    }
}
//将store中的state映射到当前组件的props中
let mapStateToProps=(state)=>{
    return {
        rightNum:state.rightNum
    }
}

//将当前组件的action发送到store处理
let mapDispatchToProps=(dispatch)=>{

    return {
        RightAdd(){//通过dispatch发送action添加动作
            dispatch(RightAdd())
        }
    }

}
//连接store和子组件，使得可以相互通信
export default connect(mapStateToProps,mapDispatchToProps)(Right);