/**
 * @Description: Main.js
 * @author zhangzhong
 * @date 2020/12/11 
*/
import React,{Component} from "react";
import './Main.css'
import math from '../math.js'


class Main extends Component{
    constructor(props){
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


    /**
     *@FunctionDes:取到输入的值，将它push到str数组中
     *@Time:2020/12/3
     *
     */
    setNum(val){
        this.state.str.push(val)
        this.setState({
            num: this.state.str.join(""),
            operationFlag: true,
            subFlag: 0
        })
    }


    /** //取到输入的点,push到str中.判断 ”.“ 时候输入合理，用pointFlag标记它是否合理
     *@FunctionDes:
     *@Time:2020/12/3
     *
     */
    Point(val){
        if (this.state.pointFlag){
            this.state.str.push(val)
            this.setState({
                num: this.state.str.join(""),
                pointFlag: false
            })
        }
    }

    /**
     *@FunctionDes://点击 “AC按钮” 来清除显示的数据
     *@Time:2020/12/3
     *
     */
    clearNum(){
        this.setState({
            str: [],
            num: 0,
            pointFlag: true,
            operationFlag: false,
        })
    }


    /**
     *@FunctionDes://获取输入的计算方法，push到str中.判断 ”-“ 的次数来用subFlag标记它是否合理
     *@Time:2020/12/3
     *
     */
    Fun(val){
        if (this.state.operationFlag || val === "-"){
            if (val === "-"){
                this.setState({
                    subFlag: 1
                })
            }
            if (this.state.subFlag === 0){
                this.state.str.push(val)
                this.setState({
                    num: this.state.str.join(""),
                    pointFlag: true,
                    operationFlag: false
                })
            }

        }

    }


    /**
     *@FunctionDes:通过Mathjs库的evalevaluate去计算处理得到的表达式，再通过math.format将结果改成string类型显示结果
     *@Time:2020/12/3
     *
     */
    calculate(){
        let resNum = math.format(math.evaluate(this.state.str.join("")));
        console.log(resNum)
        if (resNum === undefined){
            alert("请先输入，在计算");
        } else{
            this.setState({
                num: resNum
            })

            let opt = "&num="+resNum
            const url = "http://localhost/phpcrud/app.php?action=addNum";

            fetch(url,{
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: opt,
            })
                .then((response) => response.json())
                .then((res) => {
                    alert(res.message)
                })

        }

    }

    /**
     *@FunctionDes:获取请求获得所有请求
     *@Time:2020/12/11
     *
     */
    getAllNum(){

        const url = "http://localhost/phpcrud/app.php?action=read";

        fetch(url,{
            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
            .then((response) => response.json())
            .then((res) => {
                console.log(res.users)
            })

    }

    /**
     *@FunctionDes: 通过id 更新数据，传入一个新的数字更新对应id的数字
     *@Time:2020/12/11
     *
     */
    upDate(id,newNum){

        if (typeof (id*1) === 'number' && typeof (newNum*1) === 'number' && id !== ''){
            let opt = "&id="+id+"&num="+newNum
            const url = "http://localhost/phpcrud/app.php?action=update";

            fetch(url,{
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: opt,
            })
                .then((response) => response.json())
                .then((res) => {
                    alert(res.message);
                    this.inputID.value = '';
                    this.inputNewNum.value = ''
                })

        } else{
            alert("输入的不是数字")
        }

    }

    /**
     *@FunctionDes: 通过id 删除对应的数据
     *@Time:2020/12/11
     *
     */
    deleteById(id){

        if (typeof (id*1) === 'number' && id !== ''){
            let opt = "&id="+id;
            const url = "http://localhost/phpcrud/app.php?action=delete";

            fetch(url,{
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: opt,
            })
                .then((response) => response.json())
                .then((res) => {
                    alert(res.message);
                    this.inputDleID.value = '';
                })

        } else{
            alert("输入的不是数字")
        }

    }


    render(){
        return (
            <div className="box">
                <button className="btn" onClick={() => {
                    this.getAllNum()
                }}>获取计算的所有结果
                </button>
                <div className="one">
                    <input className="input" type="text" placeholder="请输入修改数的id" ref={(input) => this.inputID = input}/>
                </div>
                <div className="two">
                    <input className="input" type="text" placeholder="请输入新的数字"
                           ref={(input) => this.inputNewNum = input}/>
                    <button className="btn" onClick={() => {
                        this.upDate(this.inputID.value,this.inputNewNum.value)
                    }}>提交更新数据
                    </button>
                </div>

                <div className="delete">
                    <input className="input" type="text" placeholder="请输入删除的id"
                           ref={(input) => this.inputDleID = input}/>
                    <button className="btn" onClick={() => {
                        this.deleteById(this.inputDleID.value)
                    }}>确定删除数据
                    </button>
                </div>

                <div className="show">
                    <h1>
	                        <span>
		                        {this.state.num}
	                        </span>
                    </h1>
                </div>
                <div className="button">
                    <ul className="ul-box">
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