/**
 * author: 皮新雷
 * data：12-15
 * description：抽奖底部轮播图
 */
import React,{Component} from 'react';
import Style from './index.module.css'
import LuckySlideShow from "../luckySlideShow";

class LuckyBottom extends Component{
    render(){
        return (
            <div className={Style.page}>
                <div className={Style.picture}>
                    {/*左侧的小喇叭*/}
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-laba"></use>
                    </svg>
                </div>
                {/*    右边的轮播图*/}
                <div className={Style.slideShow}>
                    <LuckySlideShow RecordName={this.props.RecordName}/>
                </div>
            </div>
        );
    }
}

export default LuckyBottom