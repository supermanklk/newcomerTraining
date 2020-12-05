/**
 * @Description:
 * @author LuHao
 * @date 2020/12/4
 */
import React, {Component} from 'react';
import './PayMain.css'
import ChildA from './ChildA/ChildA'        //导入组件A,B,C
import ChildB from './ChildB/ChildB'
import ChildC from './ChildC/ChildC'

export class PayMain extends Component {
    render() {
        return (
            <div id='main'>
                <div className='pay'>
                    <div className='title'>
                        <div className='time'>2:20</div>
                        <div className='icon'>
                            <img src="/img/信号.png" alt=""/>
                            4G
                            <img src="/img/电池.png" alt=""/>
                        </div>
                    </div>
                    <div className='complete'>完成</div>
                    <div className="payIcon">
                        <img src="/img/支付宝.png" alt=""/>
                        <div>支付成功</div>
                    </div>
                    <div className="payMoney">
                        <span>¥</span>32.00
                    </div>
                    <div className='payPlace'>
                        <div className='payRank'>
                            <div>山东水饺上海新二店</div>
                            <div>¥ 32.00</div>
                        </div>
                        <div className='payRank'>
                            <div>付款方式</div>
                            <div>花呗</div>
                        </div>
                    </div>
                </div>
                <div className="border"></div>
                <div className='choice'>
                    <div className='title'>
                        <div>到店付款有奖励</div>
                        <div>| &nbsp;以下奖励任选一个</div>
                    </div>
                    <div className='child'>
                        <ChildA/>
                        <ChildB/>
                        <ChildC/>
                    </div>
                </div>
                <div className="button">
                    <div className='buttons'>
                        <button>评价一下</button>
                        <button>返回首页</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PayMain