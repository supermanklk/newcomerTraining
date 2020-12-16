/**
 * author: 皮新雷
 * data：12-15
 * description：抽奖中奖记录
 */

import React,{Component} from 'react';
import Style from './index.module.css';


class LuckyRecord extends Component{
    constructor(props){
        super(props);
        this.state = {
            showRecord: false //是否展示出中奖记录，默认为false
        }
    }
    // 点击展现中奖记录
    showRecord(){
        let showRecord = this.state.showRecord
        this.setState({
            showRecord: !showRecord
        })
    }
    render(){
        return (
            <div className={Style.page}>
                {
                    this.state.showRecord ?
                        <div className={Style.record} onClick={this.showRecord.bind(this)}>
                            {this.props.RecordName.map((v, i) => {
                                return <p key={i}>{v}</p>
                            })}
                        </div> :
                        <div onClick={this.showRecord.bind(this)}>中奖记录 ></div>
                }
            </div>
        );
    }
}

export default LuckyRecord