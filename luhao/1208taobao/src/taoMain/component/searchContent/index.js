/**
 * @Description:
 * @author LuHao
 * @date 2020/12/9
 */
import React, {Component} from 'react';
import './index.css'

/**
 * Notes: 秒杀组件
 * User: LuHao
 * DateTime: 2020/12/9 15:10
 */
function Miao(props) {
    if (props.flag) {
        return (
            <div className='over'>秒杀</div>
        )
    } else {
        return (
            <div></div>
        )
    }

}

/**
 * Notes: 双12组件
 * User: LuHao
 * DateTime: 2020/12/9 15:10
 */
function Twelve(props) {
    if (props.flag) {
        return (
            <div className='twelve'>12.12</div>
        )
    } else {
        return (
            <></>
        )
    }
}

function Stock(props) {
    if (props.num <= 5) {
        return (
            <div className='stock'>仅剩{props.num}件</div>
        )
    } else {
        return (
            <></>
        )
    }
}

class SearchContent extends Component {
    render() {
        const {main_img, repertory, flag_1212, title, keyword, price, seckill, business_name} = this.props.commodity
        return (
            <div className="ranks">
                <div className="pic">
                    <img src={main_img} alt=""/>
                    <Stock num={repertory}/>
                    <Twelve flag={flag_1212}/>
                </div>
                <div className='ranksLeft'>
                    <div className="ranks-title">{title}</div>
                    <div className='ranksKey'>
                        {
                            eval(keyword).map(function (value, key) {
                                return (
                                    <div key={key}>{value}</div>
                                )
                            })
                        }
                    </div>
                    <div className='prize'>
                        <div> ¥<span>{price}</span>.00</div>
                        <Miao flag={seckill}/>
                    </div>
                    <div className="label">
                        <div className="own">自营</div>
                        <div className="jd">
                            <div className='JD'>京东</div>
                            <div className="JDTop">精选</div>
                        </div>
                        <div className='new'>新品</div>
                    </div>
                    <div className="comment">70+条评论 100%好评</div>
                    <div className="taoName">{business_name}<span> 进店 ></span></div>
                </div>
            </div>
        );
    }
}

export default SearchContent;