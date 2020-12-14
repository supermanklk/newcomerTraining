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
    constructor(props){
        super(props);
        this.state = {
            myList: [
                {name: 'AC',color: 'rgb(165,165,165)',src: '',fontSize: 'black'},
                {name: '+/-',color: 'rgb(165,165,165)',src: '',fontSize: 'black'},
                {name: '%',color: 'rgb(165,165,165)',src: '',fontSize: 'black'},
                {name: '÷',color: 'rgb(254,158,9)',src: '',fontSize: 'white'},
                {name: '7',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
                {name: '8',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
                {name: '9',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
                {name: 'X',color: 'rgb(254,158,9)',src: '',fontSize: 'white'},
                {name: '4',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
                {name: '5',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
                {name: '6',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
                {name: '-',color: 'rgb(254,158,9)',src: '',fontSize: 'white'},
                {name: '1',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
                {name: '2',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
                {name: '3',color: 'rgb(51,51,51)',src: '',fontSize: 'white'},
                {name: '+',color: 'rgb(254,158,9)',src: '',fontSize: 'white'},
            ], // 计算器上的部分值
            expression: '', // 需要显示出的表达式，默认为0
        }
    }

    // 把计算器的部分按钮展示出来
    shouButton(){
        let myList = this.state.myList
        // console.log(myList)
        let res = myList.map((v,i) => {
            // console.log(v.name, v.color)
            return (
                <MyButton funFather={this.funFather} key={i} name={v.name} color={v.color} bgc={v.src}
                          fontSize={v.fontSize}/>
            )
        })
        return res
    }

    // 计算器的计算函数
    funFather = (myName) => {
        if (String(myName) === 'AC'){
            this.setState({
                expression: '',
            })
            return
        }
        if (String(myName) === '='){
            let showResult = ''
            let that = this
            try{
                let expression = that.state.expression
                expression = String(expression)
                expression = expression.replace(/÷/g,"/")
                expression = expression.replace(/X/g,"*")
                showResult = String(math.evaluate(expression))
                if (!showResult){
                    showResult = ''
                }
                this.setState({
                    expression: showResult === '' ? 0 : showResult
                })
                return
            } catch (e){
                alert('表达式出错，请重新输入')
                this.setState({
                    expression: ''
                })
                return
            }
        }

        let expression = myName
        this.setState({
            expression: String(this.state.expression)+String(expression)
        })
    }

    render(){
        return (
            <div className={IndexCss.page}>
                {/*    头部运算部分*/}
                <div className={IndexCss.title}>
                    {this.state.expression}
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

export default Index