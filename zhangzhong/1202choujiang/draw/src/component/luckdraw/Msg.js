/**
 * @Description: Msg.js
 * @author zhangzhong
 * @date 2020/12/1
 */
import React,{Component} from 'react';
import './Msg.css'
//广播组件
class Msg extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div className='msg'>
                <img src="./image/通知.png" alt=""/>
                <div className="msg-text">
                    <p className="msg-scroll">
                        {
                            this.props.msg.map(
                                (item,index) => {
                                    return <span className="scroll" key={index}> 恭喜 {item.name} 抽中 {item.content} </span>
                                })
                        }

                    </p>
                </div>

            </div>
        );
    }
}


export default Msg;