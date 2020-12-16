/**
 * author: 皮新雷
 * data：12-15
 * description：抽奖头部标题部分
 */
import React,{Component} from 'react';
import Style from './index.module.css'

class LuckyTitle extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className={Style.title}>
                <div className={Style.bigTitle}>
                    今日还有 {this.props.wish / this.props.expend} 次机会
                </div>
                <div className={Style.smallTitle}>
                    剩余 {this.props.wish} 心愿
                </div>
            </div>
        );
    }
}

export default LuckyTitle