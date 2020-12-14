/**
 * @Description: 商品项 组件
 * @author 霍青利
 * @date 2020/12/8 19:03
*/

import React from 'react';

import './index.css';

import img1212 from '@assets/img/1212.png';
import rightArrow from '@assets/img/right-arrow.png';


export default function GoodsItem(props) {
    const { goodsItem } = props
    return (
        <div className="goods-item">
            <div className="goods-img">
                {/*img1212*/}
                <img src={img1212} className={goodsItem.flag_1212 ? 'hidden' : 'img1212'} alt=''/>
                <img className="main-img" src={goodsItem.main_img} alt=''/>
                {/*rest-tips*/}
                <div className={goodsItem.repertory > 5 ? 'hidden' : 'rest-tips'}>仅剩 {goodsItem.repertory} 件</div>
            </div>
            <div className="goods-describe">
                <div className="goods-title">{goodsItem.title}</div>
                <div className="goods-keyword">
                    {/* eval 方法可以将字符串数组转换成 数组 */}
                    {
                        eval(goodsItem.keyword).map((item, index) => {
                            return (<div key={index}>{item}</div>)
                        })
                    }
                </div>
                <div className="goods-price">
                    <span>￥</span>{goodsItem.price.toFixed(2)} <span className={goodsItem.seckill ? 'hidden' : 'second-kill'}>秒杀价</span>
                </div>
                <div className="store-property">
                    <span className="auto-trophy">自营</span>
                    <span className="jd-select"><span>京东</span><span>精选</span></span>
                    <span className="new-goods">新品</span>
                    {/*<span className="secure-purchase">放心购</span>*/}
                    <span className="tips1212">领券每满300减40</span>
                </div>
                <div className="goods-access">70+条评价 100%好评</div>
                <div className="store-name">
                    {goodsItem.business_name} <span>进店</span><img src={rightArrow} alt='' />
                </div>
            </div>
        </div>
    );
}