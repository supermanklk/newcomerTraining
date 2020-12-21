/*
* auther: 皮新雷
* day: 2020-12-14
* description: 这是计算器的index文件，有计算器计算函数和全部的HTML
*  */
import React,{Component} from 'react';
import IndexCss from './index.module.css'
import MyButton from './calculatorButton/index'
import ZeroButton from './zeroButton/index'
import { create, all } from 'mathjs'
import {connect} from 'react-redux'
import store from "../store";

const config = {
    epsilon: 1e-12,
    matrix: 'Matrix',
    number: 'BigNumber', // 可选值：number BigNumber
    precision: 64,
    predictable: false,
    randomSeed: null
}

const math = create(all, config)

class Index extends Component{
    // 把计算器的部分按钮展示出来
    shouButton(){
        let myList = this.props.myList
        let res = myList.map((v,i) => {
            return (
                <MyButton funFather={this.funFather} key={i} name={v.name} color={v.color} bgc={v.src}
                          fontSize={v.fontSize}/>
            )
        })
        return res
    }

    计算器的计算函数
    funFather = (myName) => {
        if(String(myName) === '+/-' || String(myName) === '%') return
        if (String(myName) === 'AC'){
            let action = {
                type:'CALCULATOR_AC',
            }
            store.dispatch(action)
            return
        }
        if (String(myName) === '='){
            let showResult = ''
            let that = this
            try{
                let expression = JSON.parse(JSON.stringify(that.props.expression))
                expression = String(expression)
                expression = expression.replace(/÷/g,"/")
                expression = expression.replace(/X/g,"*")
                showResult = String(math.evaluate(expression))
                if (showResult === 'undefined'){
                    showResult = ''
                }
                expression = showResult === '' ? 0 : showResult
                let action = {
                    type: 'ADD_TO_EXPRESSION',
                    value: expression
                }
                store.dispatch(action)
                return
            } catch (e){
                alert('表达式出错，请重新输入')
                let action = {
                    type: 'ADD_TO_EXPRESSION',
                    value: ''
                }
                store.dispatch(action)
                return
            }
        }
        let expression = myName
        let action = {
            type: 'NEW_EXPRESSION',
            value: String(this.props.expression)+String(expression)
        }
        store.dispatch(action)
    }

    render(){
        return (
            <div className={IndexCss.page}>
                {/*    头部运算部分*/}
                <div className={IndexCss.title}>
                    {this.props.expression}
                </div>
                {/*        计算器按钮内容部分*/}
                <div className={IndexCss.content}>
                    {this.shouButton()}
                    <ZeroButton funFather={this.funFather} name={0} color={'rgb(51,51,51)'} src={''}/>
                    <MyButton funFather={this.funFather} name={'.'} color={'rgb(51,51,51)'} src={''}/>
                    <MyButton funFather={this.funFather} name={'='} color={'rgb(254,158,9)'} src={''}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        expression: state.expression,
        myList: state.myList
    }
}

const dispatchToProps = (dispatch) => {
    return {

    }
}


export default connect(mapStateToProps, dispatchToProps)(Index)