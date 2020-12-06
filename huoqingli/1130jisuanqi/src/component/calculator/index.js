/**
 * @Description: 计算器主页面
 * @author 霍青利
 * @date 2020/11/30 15:11
*/

import React, { Component } from 'react';
import { create, all } from 'mathjs'
import './index.css'
const config = {
    epsilon: 1e-12,
    matrix: 'Matrix',
    number: 'BigNumber',
    precision: 64,
    predictable: false,
    randomSeed: null
}
const math = create(all, config)

class Calculator extends Component {
    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.state = {
            resultNum: '0'
        }
    }

    /**
     * 页面挂载完毕，绑定鼠标按下事件
     * @author 霍青利
     * @date 2020/12/2 19:24
     *
    */
    componentDidMount(){
        document.addEventListener("keydown", this.onKeyDown)
    }

    /**
     * 页面销毁之前 解绑事件
     * @author 霍青利
     * @date 2020/12/2 19:25
     *
    */
    componentWillUnmount(){
        document.removeEventListener("keydown", this.onKeyDown)
    }

    /**
     * 鼠标按下事件
     * @author 霍青利
     * @date 2020/12/2 19:26
     * 
    */
    onKeyDown = (e) => {
        switch(e.keyCode) {
            case 96:
            case 48:
                this.handlePushNum(0);
                break;
            case 97:
            case 49:
                this.handlePushNum(1);
                break;
            case 98:
            case 50:
                this.handlePushNum(2);
                break;
            case 99:
            case 51:
                this.handlePushNum(3);
                break;
            case 100:
            case 52:
                this.handlePushNum(4);
                break;
            case 101:
            case 53:
                this.handlePushNum(5);
                break;
            case 102:
            case 54:
                this.handlePushNum(6);
                break;
            case 103:
            case 55:
                this.handlePushNum(7);
                break;
            case 104:
            case 56:
                this.handlePushNum(8);
                break;
            case 105:
            case 57:
                this.handlePushNum(9);
                break;
            case 106:
                this.handlePushNum("×");
                break;
            case 107:
                this.handlePushNum("+");
                break;
            case 13:
                this.handleResultCalc();
                break;
            case 109:
                this.handlePushNum("-");
                break;
            case 110:
                this.handlePushNum(".");
                break;
            case 111:
                this.handlePushNum("÷");
                break;
            case 8:
                this.handleClearCalc();
                break;
        }
    }

    /**
     * 获取用户点击的数字
     * @author 霍青利
     * @date 2020/11/30 15:45
     * @param e
     *
    */
    handlePushNum(val) {
        if (val === '.' && this.state.resultNum === '0'){
            this.setState({
                resultNum: '0.'
            })
        } else {
            this.setState({
                resultNum: (this.state.resultNum === '0' ? "" : this.state.resultNum) + val
            })
        }

    }

    /**
     * 清空计算框
     * @author 霍青利
     * @date 2020/11/30 15:54
     *
    */
    handleClearCalc() {
        this.setState({
            resultNum: '0'
        })
    }

    /**
     * 计算结果
     * @author 霍青利
     * @date 2020/11/30 16:10
     *
    */
    handleResultCalc() {
        // 获取输入的文本
        let calcFormula = this.textInput.current.innerText;
        // 按照运算符号分割表达式
        let tempArr = calcFormula.split(/×|-|÷|[+]/);
        // 判断小数点的个数
        let flag = '';
        // 判断多个运算符出现的情况
        let flagArr = [];
        tempArr.forEach(item => {
            let res = item.match(/[.]/g)
            let count = !res ? 0 : res.length;
            if (count > 1) {
               flag = count
            }
            if(item === '') {
                flagArr.push(item);
            }
        })
        // 如果小数点的个数大于1，或者有多个运算符同时出现则提示问题
        if (flag > 1 || flagArr.length > 0) {
            this.setState({
                resultNum: '0'
            })
            return alert('请输入正确的表达式！')
        }

        let newCalc = calcFormula.replaceAll('×', '*').replaceAll('÷', '/');
        // if (newCalc === "0.1 + 0.2")
        // eval 函数可以进行基本的运算操作
        let res = math.format(math.evaluate(newCalc));
        this.setState({
            resultNum: res + ''
        })
    }

    render () {
        // console.log(math.bignumber('0.1 + 0.2'))
        return (
            <div className="container">
                {/* 显示计算过程和结果的面板 */}
                <div className="calc-result">
                    <div className="calc-result-item" ref={this.textInput}>{this.state.resultNum}</div>
                </div>

                {/* 按键面板 */}
                <div className="input-active">
                    <div className="row">
                        <div className="row-item row-item-top" onClick={() => this.handleClearCalc()}>AC</div>
                        <div className="row-item row-item-top row-item-plus-minus">
                            <i className="plus">+</i>/<i className="minus">-</i>
                        </div>
                        <div className="row-item row-item-top">%</div>
                        <div className="row-item row-item-right" onClick={() => this.handlePushNum('÷')}>÷</div>
                    </div>
                    <div className="row">
                        <div className="row-item" onClick={() => this.handlePushNum(7)} >7</div>
                        <div className="row-item" onClick={() => this.handlePushNum(8)}>8</div>
                        <div className="row-item" onClick={() => this.handlePushNum(9)}>9</div>
                        <div className="row-item row-item-right" onClick={() => this.handlePushNum('×')}>×</div>
                    </div>
                    <div className="row">
                        <div className="row-item" onClick={() => this.handlePushNum(4)}>4</div>
                        <div className="row-item" onClick={() => this.handlePushNum(5)}>5</div>
                        <div className="row-item" onClick={() => this.handlePushNum(6)}>6</div>
                        <div className="row-item row-item-right" onClick={() => this.handlePushNum('-')}>-</div>
                    </div>
                    <div className="row">
                        <div className="row-item" onClick={() => this.handlePushNum(1)}>1</div>
                        <div className="row-item" onClick={() => this.handlePushNum(2)}>2</div>
                        <div className="row-item" onClick={() => this.handlePushNum(3)}>3</div>
                        <div className="row-item row-item-right" onClick={() => this.handlePushNum('+')}>＋</div>
                    </div>
                    <div className="row">
                        <div className="row-item row-item-num0" onClick={() => this.handlePushNum(0)}>0</div>
                        <div className="row-item" onClick={() => this.handlePushNum('.')}>·</div>
                        <div className="row-item row-item-right" onClick={() => this.handleResultCalc()}>＝</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;