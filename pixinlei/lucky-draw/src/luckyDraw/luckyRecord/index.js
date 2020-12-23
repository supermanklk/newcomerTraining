/**
 * author: 皮新雷
 * data：12-15
 * description：抽奖中奖记录
 */
import React,{Component} from 'react';
import style from './index.module.css';


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
        let {showRecord} = this.state
        return (
            <div className={style.page}>
                {
                    showRecord ?
                        <div className={style.record} onClick={this.showRecord.bind(this)}>
                            {this.props.recordName.map((v, i) => {
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