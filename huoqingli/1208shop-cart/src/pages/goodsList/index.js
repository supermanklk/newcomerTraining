/**
 * @Description: 商品列表组件
 * @author 霍青利
 * @date 2020/12/8 16:38
*/

import React, {Component} from 'react';

import './index.css'

import Header from "./components/header";
import TabBar from "./components/tabBar";
import GoodsItem from "./components/goodsItem";

import { connect } from 'react-redux';
import { getGoodsList } from "./action";



class GoodsList extends Component{

    componentDidMount(){
        // 从 store 中获取数据
        this.props.getGoodsList();

    }

    render(){
        return (
            <div className="container">
                <Header />
                <TabBar />
                {
                    this.props.goodsList.map((item, index) => {
                        return (
                            <GoodsItem goodsItem={item} key={index}/>
                        )
                    })
                }

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        goodsList: state.goodsListReducer.goodsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGoodsList() {
            dispatch(getGoodsList())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GoodsList);