/**
 * @Description: 支付页面父组件
 * @author 霍青利
 * @date 2020/12/4 15:22
*/

import React,{Component} from 'react';
import RedPackage from "./red-package";
import Score from "./score";
import Loan from "./loan";

import './index.css'

class Pay extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentTime: new Date().toLocaleTimeString().substring(0, 6),
            payPrice: 32
        }
    }

    render(){
        let { currentTime, payPrice } = this.state
        return (
            <div className="container">
                {/* 支付信息 */}
                <div className="pay-info">
                    <div className="default-info">
                        <div className="time-info">{currentTime}</div>
                        <div className="electric-info">
                            <img src="/static/signal.png" alt=""/>
                            <span>4G</span>
                            <img src="/static/electric.png" alt=""/>
                        </div>
                    </div>
                    <div className="pay-info-detail">
                        <div className="pay-success">
                            <img src="/static/pay.png" alt=""/>
                            <div className="pay-success-text">支付成功</div>
                            <div className="pay-price"><span>￥</span>{payPrice.toFixed(2)}</div>
                            <div className="complete">完成</div>
                        </div>
                        <div className="detail-text">
                            <div className="detail-text-title">
                                <div>山东水饺上海新二路店</div>
                                <div>付款方式</div>
                            </div>
                            <div className="detail-text-content">
                                <div><span>￥</span>{payPrice.toFixed(2)}</div>
                                <div>花呗</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 支付奖励 */}
                <div className="pay-award">
                    <div className="pay-award-title">
                        <div className="pay-award-title-text">
                            到店付款有奖励
                        </div>
                        <div className="pay-award-title-tips">
                            以下奖励任选一个
                        </div>
                    </div>

                    <div className="components">
                        <RedPackage></RedPackage>
                        <Score></Score>
                        <Loan></Loan>
                    </div>
                </div>

                {/* 底部按钮 */}
                <div className="footer">
                    <button className="bottom-btn assess-btn">评价一下</button>
                    <button className="bottom-btn">返回首页</button>
                </div>

            </div>
        );
    }
}

export default Pay;