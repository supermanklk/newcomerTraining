/**
 * @Description: 奖品项的组件
 * @author 霍青利
 * @date 2020/12/2 15:12
 */
import React,{Component} from 'react';
import './LuckItem.css'

class LuckItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {luckItem,activeId} = this.props;
        return (
            <div className={activeId === luckItem.id ? 'content-luck-item choose-item' : 'content-luck-item'}
                 key={luckItem.id}>
                <img src={luckItem.imgUrl} className="luck-img"/>
                <div className="luck-title">{luckItem.title}</div>
            </div>
        )
    }
}

export default LuckItem