import React, {Component} from "react";
import './Main.css'
let math = require('mathjs');


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pointFlag: true,
            operationFlag: false,
            subFlag: 0,
            str: [],
            num: 0
        }
        this.setNum = this.setNum.bind(this)
        this.Fun = this.Fun.bind(this)
        this.Point = this.Point.bind(this)
    }

    //取到输入的值，将它push到str数组中
    setNum(val) {
        this.state.str.push(val)
        this.setState({
            num: this.state.str.join(""),
            operationFlag: true,
            subFlag: 0
        })
    }

    //取到输入的点
    Point(val) {
        if (this.state.pointflag) {
            this.state.str.push(val)
            this.setState({
                num: this.state.str.join(""),
                pointFlag: false
            })
        }
    }

    //清除数据
    clearNum() {
        this.setState({
            str: [],
            num: 0,
            pointFlag: true,
            operationFlag: false,
        })
    }

    //获取输入的计算方法，push到str中
    Fun(val) {
        if (this.state.operationFlag || val === "-") {
            if (val === "-") {
                this.setState({
                    subFlag: 1
                })
            }
            if (this.state.subFlag === 0) {
                this.state.str.push(val)
                this.setState({
                    num: this.state.str.join(""),
                    pointFlag: true,
                    operationFlag: false
                })
            }

        }

    }

    //通过eval去计算处理得到的表达式
    calculate() {
        let res = math.parser().eval(this.state.str.join(""))
        this.setState({
            num: res
        })
    }

    render() {
        return (
            <div className="boox">
                <div className="show">
                    <h1>
	                        <span>
		                        {this.state.num}
	                        </span>

                    </h1>
                </div>
                <div className="button">
                    <ul className="ulbox">
                        <li className="funF" onClick={() => this.clearNum()}>
                            <p>AC</p>
                        </li>
                        <li className="funF">
                            <p>+/-</p>
                        </li>
                        <li className="funF">
                            <p>%</p>
                        </li>
                        <li className="fun" onClick={() => this.Fun("/")}>
                            <p>÷</p>
                        </li>
                        <li className="Number" onClick={() => this.setNum(7)}>
                            <p>7</p>
                        </li>
                        <li className="Number" onClick={() => this.setNum(8)}>
                            <p>8</p>
                        </li>
                        <li className="Number" onClick={() => this.setNum(9)}>
                            <p>9</p>
                        </li>
                        <li className="fun" onClick={() => this.Fun("*")}>
                            <p>×</p>
                        </li>
                        <li className="Number" onClick={() => this.setNum(4)}>
                            <p>4</p>
                        </li>
                        <li className="Number" onClick={() => this.setNum(5)}>
                            <p>5</p>
                        </li>
                        <li className="Number" onClick={() => this.setNum(6)}>
                            <p>6</p>
                        </li>
                        <li className="fun" onClick={() => this.Fun("-")}>
                            <p>-</p>
                        </li>
                        <li className="Number" onClick={() => this.setNum(1)}>
                            <p>1</p>
                        </li>
                        <li className="Number" onClick={() => this.setNum(2)}>
                            <p>2</p>
                        </li>
                        <li className="Number" onClick={() => this.setNum(3)}>
                            <p>3</p>
                        </li>
                        <li className="fun" onClick={() => this.Fun("+")}>
                            <p>+</p>
                        </li>
                        <li className="Number two" onClick={() => this.setNum(0)}>
                            <p>0</p>
                        </li>
                        <li className="Number" onClick={() => this.Point('.')}>
                            <p>.</p>
                        </li>
                        <li className="fun" onClick={() => this.calculate()}>
                            <p>=</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Main