/*
* auther: 皮新雷
* day: 2020-12-14
* description: 这是'0'按钮，有单独的样式
*  */
import React,{Component} from 'react';
import ButtonCss from './index.module.css'


class Index extends Component{
    // 每个按钮点击功能
    funCalculator(e){
        this.props.funFather(e.target.innerHTML)
    }

    render(){
        let innerCss = {
            background: this.props.color,
            color: this.props.fontSize
        }
        return (
            <div className={ButtonCss.page} style={innerCss} onClick={this.funCalculator.bind(this)}>
                {this.props.name}
            </div>
        );
    }
}

export default Index