/**
 * @Description: index.js
 * @author zhangzhong
 * @date 2020/12/20 
*/

import './index.css'
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getRes} from './action';


class ListMsg extends Component{
    /**
    *@FunctionDes:在组件挂载完毕时请求分发action
    *@Time:2020/12/20
    *
    */
    componentDidMount(){
        this.props.getRes();
    }

    render(){
        return (
            <div className="list-box">
                {
                    this.props.list.length === 0 ? <p>暂无数据</p> : <div>
                        {
                            this.props.list.map((item,index) => {
                                return (
                                    <div key={index} className="list-card">
                                        <div className="card-left">
                                            <p className="card-nav">{item.name} · {item.data < 24 ?
                                                <span>{item.data}小时前</span> :
                                                <span>{Math.floor(item.data/24)}天前</span>}</p>
                                            <p className="title">{item.title}</p>
                                            <div className="good"><img src="./images/good.svg"
                                                                       alt=""/> {item.good === 0 ? "" : item.good}</div>
                                            <div className="msg"><img src="./images/msg.svg"
                                                                      alt=""/>{item.msg === 0 ? "" : item.msg}</div>
                                        </div>
                                        <div className="card-right">
                                            {item.imgSrc !== "" ? <img src={item.imgSrc} alt=""/> : ""}
                                        </div>
                                    </div>
                                )
                            })
                        }</div>
                }
            </div>
        );
    }
}

let mapStateToProps = (state) => {  //通过connect的mapStateToProps方法来获取store中的getreslist的list状态
    return {
        list: state.getreslist.list
    }

}

const mapDispatchToProps = (dispatch) => {  //通过connect的mapDispatchToProps方法来分发action
    return {
        getRes(){
            dispatch(getRes())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListMsg);//用react-redux下的connect方法来实现连接redux和组件