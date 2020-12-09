/**
 * @Description:
 * @author LuHao
 * @date 2020/12/9
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {write} from './action'
import './index.css'
import SearchContent from "./component/searchContent";

class TaoMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commodity: ['1', '222']
        }
    }

    /**
     * Notes: 通过Rudex方法请求数据
     * User: LuHao
     * DateTime: 2020/12/9 15:08
     */
    componentDidMount() {
        this.props.write()
    }

    render() {
        return (
            <div className='tao-main'>
                <div className="top">
                    <div className="time">1:20</div>
                    <div className="topIcon">
                        <img src="/img/信号.png" alt=""/>
                        4G
                        <img src="/img/电源.png" alt=""/>
                    </div>
                </div>
                <div className="search">
                    <div className="searchIcon">
                        <img src="/img/返回.png" alt=""/>
                    </div>
                    <div className="searchBar">
                        <input type="text"/>
                        <img src="/img/搜索.png" alt=""/>
                        <img src="/img/照相.png" alt=""/>
                    </div>
                    <div className="searchIconLeft">
                        <img src="/img/功能.png" alt=""/>
                    </div>
                </div>
                <div className="choice">
                    <div className="choiceFirst">
                        综合推荐
                        <img className='' src="/img/向下.png" alt=""/>
                        <img className='bigIcon' src="/img/箭头2.png" alt=""/>
                    </div>
                    <div>销量</div>
                    <div className="choiceThird">
                        价格
                        <img src="/img/下箭头.png" alt=""/>
                        <img src="/img/上箭头.png" alt=""/>
                    </div>
                    <div>店铺</div>
                </div>
                <div className="subChoice">
                    <div className='choiceOption'>
                        <div>京东物流</div>
                        <div>
                            品牌
                            <img src="/img/下箭头.png" alt=""/>
                        </div>
                        <div>
                            适合尺寸
                            <img src="/img/下箭头.png" alt=""/>
                        </div>
                    </div>
                    <div className='screen'>
                        筛选
                        <img src="/img/筛选.png" alt=""/>
                    </div>
                </div>
                <div className="content">
                    {
                        this.props.text.map(function (value, key) {
                            return (
                                <SearchContent key={key} commodity={value}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        text: state.counterReducer.commodity
    }
}

function mapDispatchToProps(dispatch) {
    return {
        write: () => {
            dispatch(write())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaoMain);