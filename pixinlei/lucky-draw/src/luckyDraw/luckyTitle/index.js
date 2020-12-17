/**
 * author: 皮新雷
 * data：12-15
 * description：抽奖头部标题部分
 */
import React,{Component} from 'react';
import style from './index.module.css'

class LuckyTitle extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className={style.title}>
                <div className={style.bigTitle}>
                    今日还有 {this.props.wish / this.props.expend} 次机会
                </div>
                <div className={style.smallTitle}>
                    剩余 {this.props.wish} 心愿
                </div>
            </div>
        );
    }
}

export default LuckyTitle