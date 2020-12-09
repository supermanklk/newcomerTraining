/**
 * @Description: index.js
 * @author zhangzhong
 * @date 2020/12/9 
*/
import React,{Component} from 'react';   //导入react
import './index.css'                     //导入样式
import {getRes} from "./action";         //导入action，发送该组件动作
import {connect} from "react-redux";     //导入connect,实现组件连接redux的关键


class Cart extends Component{
    constructor(props){
        super(props);
    }


    /**
     *@FunctionDes://在组件挂载完毕阶段去获取action，发送请求数据
     *@Time:2020/12/9
     *
     */
    componentDidMount(){
        this.props.getRes()
    }

    /**
     *@FunctionDes:商品列表组件
     *@Time:2020/12/9
     *
     */
    render(){
        console.log(this.props)
        return (
            <div className="cart">
                {
                    this.props.list.map((item,index) => {             //通过map循环遍历list中的商品信息
                        return (
                            <div className="cart-box" key={index}>
                                <div className="main-img">
                                    {
                                        item.flag_1212 ? <div className="active-goods">12.12</div> : ""
                                    }
                                    <img src={item.main_img} alt=""/>
                                    {
                                        item.repertory <= 5 ? <div className="rest">仅剩{item.repertory}件</div> : ""

                                    }

                                </div>
                                <div className="content">
                                    <div className="content-title">
                                        <span>{item.title}</span>
                                    </div>
                                    <div className="keyword">
                                        {
                                            eval(item.keyword).map((item,index) => {
                                                return (<div key={index}>{item}</div>)
                                            })
                                        }
                                    </div>
                                    <div className="price">
                                        ￥<span className="price-num">{item.price}</span>
                                    </div>
                                    <div className="tag">
                                        <div className="proprietary">自营</div>
                                        <div className="jd-select">
                                            <div className="jd">京东</div>
                                            <div className="select">精选</div>
                                        </div>
                                        <div className="new-goods">新品</div>
                                        <div className="ensure">放心购</div>
                                    </div>
                                    <div className="review">
                                        <span>70+条评论</span> <span>100%好评</span>
                                    </div>
                                    <div className="business_name">
                                        <span>{item.business_name}</span> <span className="go">进店></span>
                                    </div>
                                </div>
                            </div>)
                    })
                }
            </div>
        );
    }
}

//获取store的state，传到props中
let mapStateToProps = (state) => {

    return {
        list: state.list
    }

}

//设置dispatch 分发action
const mapDispatchToProps = (dispatch) => {

    return {
        getRes(){
            dispatch(getRes())
        }
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(Cart);

