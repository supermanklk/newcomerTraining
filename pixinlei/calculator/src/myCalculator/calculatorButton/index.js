/*
* auther: 皮新雷
* day: 2020-12-14
* description: 这是计算器的各个按钮，作为子组件来使用
*  */
import React,{Component} from 'react';
import ButtonCss from './index.module.css'

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {...props}
    }

    // 每个按钮点击功能
    funCalculator(e){
        this.props.funFather(e.target.innerHTML)
    }

    render(){
        let innerCss = {
            background: this.state.color,
            color: this.state.fontSize
        }
        return (
            <div>
                <div className={ButtonCss.page} style={innerCss} onClick={this.funCalculator.bind(this)}>
                    {this.state.name}
                </div>
            </div>

        );
    }
}

export default Index