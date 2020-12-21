/**
 * @Description: index.js
 * @author zhangzhong
 * @date 2020/12/9
 */
import './index.css';                               //导入样式
import { Badge } from 'antd'                          //导入小红的ant
import Cart from './components/goodsCart/index'     //导入子组件
import React,{ Component } from 'react';              //导入react


class Main extends Component{
    constructor(props){
        super(props);
    }

    /**
    *@FunctionDes:父组件，显示主页面
    *@Time:2020/12/9
    *
    */
    render(){
        return (
            <div className="main">
                <div className="header">

                    <div className="header-msg">
                        <div className="time"><span>1:20</span></div>
                        <div className="phone-msg">
                            <img className="img-signal" src="./images/1.png" alt=""/>
                            <p>4G</p>
                            <img className="img-phone" src="./images/2.png" alt=""/>
                        </div>
                    </div>

                    <div className="header-search">
                        <img className="return" src="./images/6.png" alt=""/>
                        <div className="input">
                            <div className="input-box">
                                <img className="search" src="./images/3.png" alt=""/>
                                <div className="name"><p>四件套珊瑚绒</p></div>
                            </div>
                            <img className="camera" src="./images/4.png" alt=""/>
                        </div>
                        <img className="more" src="./images/5.png" alt=""/>
                    </div>

                    <div className="nav">
                        <div className="nav-type">
                            <p className="comprehensive">综合推荐<img src="./images/8.png" alt=""/></p>
                            <p>销量</p>
                            <p>价格</p>
                            <Badge dot>
                                <p>店铺</p>
                            </Badge>
                        </div>
                        <div className="nav-label">
                            <div className="nav-label-box">
                                <div className="logistics">
                                    <p>京东物流</p>
                                </div>
                                <div className="sales">
                                    <span>品牌</span>
                                    <img src="./images/8.png" alt=""/>
                                </div>
                                <div className="price">
                                    <span>适合床尺寸</span>
                                    <img src="./images/8.png" alt=""/>
                                </div>
                            </div>
                            <div className="screening">
                                <p className="screen-text">筛选<img className="screen-img" src="./images/7.png" alt=""/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="goods-list">
                    <Cart/>
                </div>
            </div>
        );
    }
}


export default Main