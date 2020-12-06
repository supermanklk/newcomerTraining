/**
 * @Description: App.js
 * @author zhangzhong
 * @date 2020/12/1
 */
import './App.css';
import React,{Component} from "react";
import Plate from "./component/luckdraw/Plate";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            wishNum: 100
        }
        this.changeNum = this.changeNum.bind(this)
    }

    /**
     *@FunctionDes:消耗心愿数
     *@Time:2020/12/2
     *
     */
    changeNum(num){
        this.setState({
            wishNum: this.state.wishNum-num
        })

    }

    render(){
        return (
            <div className="app">
                <div className="app-header">
                    <p className="rest-draw">今日还有 {this.state.wishNum/5} 次抽奖机会</p>
                    <p className='rest'>剩余 {this.state.wishNum} 心愿</p>
                </div>
                {/*传修改心愿函数和心愿给抽奖组件*/}
                <Plate changeNum={this.changeNum} wishNum={this.state.wishNum}/>

            </div>
        );
    }
}


export default App;
