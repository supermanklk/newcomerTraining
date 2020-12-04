/**
 * @Description: Main.js
 * @author zhangzhong
 * @date 2020/12/4
 */
import './Main.css'
import React,{Component} from "react";
import Left from "./components/Left/Left";
import Mid from "./components/Mid/Mid";
import Right from "./components/Right/Right";

/**
 *@FunctionDes:  父组件 显示界面
 *@Time:2020/12/4
 *
 */
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: "15:34"
        }
    }

    render(){
        return (
            <div className="main">
                <div className="header">
                    <div className="header-box">
                        <div className="time">
                            <p> {this.state.time} </p>
                        </div>
                        <div className="msg">
                            <div className="signal">
                                <img src="./images/1.png" alt=""/>
                            </div>
                            <div className="text">
                                4G
                            </div>
                            <div className="electricity">
                                <img src="./images/2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="content-header">
                            <div className="img">
                                <img src="./images/3.png" alt=""/>
                            </div>
                            <p>支付成功</p>
                            <h1><span>￥</span>32.00</h1>
                            <div className="button">完成</div>
                        </div>
                        <div className="content-bottom">
                            <div className="content-bottom-text item">
                                <div className="text-left">山东水饺上海新二路店</div>
                                <div className="text-right">￥32.00</div>
                            </div>
                            <div className="content-bottom-text item-bottom">
                                <div className="text-left">付款方式</div>
                                <div className="text-right">花呗</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="plate">
                    <div className="nav">
                        <p>到店付款有奖励</p><span>|</span><span>以下奖励任选一个</span>
                    </div>
                    <div className="plate-button">
                        {/*子组件*/}
                        <Left/>
                        <Mid/>
                        <Right/>
                    </div>

                </div>
                <div className="footer">
                    <button className="button withe"><p>评价一下</p></button>
                    <button className="button blue"><p>返回首页</p></button>
                </div>
            </div>
        );
    }
}

export default Main;
