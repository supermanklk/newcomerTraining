/**
 * @Description: 计算器主页面
 * @author 霍青利
 * @date 2020/11/30 15:11
*/

import React, { Component } from 'react';
import './index.css'

class Calculator extends Component {
    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.state = {
            resultNum: '0'
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
        this.setState({
            resultNum: (this.state.resultNum === '0' ? "" : this.state.resultNum) + val
        })
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

        // eval 函数可以进行基本的运算操作
        let res = eval(newCalc);
        this.setState({
            resultNum: res + ''
        })
    }

    render () {
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
                        <div className="row-item row-item-top">+/-</div>
                        <div className="row-item row-item-top">%</div>
                        <div className="row-item row-item-right" onClick={() => this.handlePushNum('÷')}>÷</div>
                    </div>
                    <div className="row">
                        <div className="row-item" onClick={() => this.handlePushNum(7)}>7</div>
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