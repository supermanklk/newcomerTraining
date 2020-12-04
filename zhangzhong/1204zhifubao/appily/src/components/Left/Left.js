import React,{Component} from 'react';
import './Left.css' //引入样式
import {LeftAdd} from './action'//导入  action唯一可以请求到store中的state
import {connect} from "react-redux";//导入 connect方法实现子组件之间的通信

class Left extends Component{
    render(){
        return (
            <div className="left">
                <p className="header-text">口碑双12红包</p>
                <p className="price">{this.props.leftNum}<span>元</span></p>
                <button onClick={this.props.LeftAdd}><span>选我</span></button>
            </div>
        );
    }
}
//将store中的state映射到当前组件的props中
let mapStateToProps = (state) => {
    return {
        leftNum: state.leftNum
    }
}

//将当前组件的action发送到store处理
let mapDispatchToProps = (dispatch) => {

    return {

        LeftAdd(){//通过dispatch发送action添加动作
            dispatch(LeftAdd())
        }
    }

}
//连接store和子组件，使得可以相互通信
export default connect(mapStateToProps,mapDispatchToProps)(Left);