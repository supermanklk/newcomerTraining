/*
* auther: 皮新雷
* day: 2020-12-10
* description: 这是一个todolist
*  */
import React,{Component} from 'react';


class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = {
            myList: [// todolist列表中复选框和内容的值
                {checkbox: false,value: '吃饭'},
                {checkbox: false,value: '睡觉'},
                {checkbox: false,value: '打豆豆'}
            ],
            inputVal: "" // input框中的内容
        }
    }

    componentWillMount(){
    }

    componentDidMount(){
    }


    // 渲染myList列表的数据
    renderList() {
        return (
            this.state.myList.map((v, i) => {
                return (
                    <div key={i}>
                        <input  id={i} type="checkbox" checked={v.checkbox} onChange={this.myNewList.bind(this, i)} />
                        <label htmlFor={i}>
                            {v.checkbox ? (<del>{v.value}</del>) : (v.value)}
                        </label>
                    </div>
                )
            })
        )
    }
    // 已经完成了的任务数
    finishedTask() {
        let num = 0
        this.state.myList.forEach((v, i) => {
            if(v.checkbox) num++
        })
        return num
    }
    //点击了CheckBox之后需要调用render,改变state里myList
    myNewList(i) {
        let myList = this.state.myList
        myList[i].checkbox = !myList[i].checkbox
        this.setState({
            myList: myList
        })
    }
    //监听input框中数据的改变
    addToList(e) {
        // console.log(e.target.value)
        this.setState({
            inputVal: e.target.value
        })
    }
    //将input框中的值添加到list中
    buttonToList() {
        let newMyList = this.state.myList
        newMyList.push(
            {checkbox: false, value: this.state.inputVal}
        )
        this.setState({
            myList: newMyList,
            inputVal: ""
        })
    }
    render(){
        return (
            <div className="page">
                {/*头部的标题*/}
                <div className="title">
                    <h1>ToDoList</h1>
                </div>
                {/*中间列表部分*/}
                <div className="content">
                    {this.renderList()}
                    <div className="calculate">
                        {this.finishedTask()}已完成 / {this.state.myList.length}总数
                    </div>
                </div>
                {/* 底下的这条线   */}
                <div className="line"></div>
                {/* input框和按钮部分   */}
                <div className="bottom">
                    <div className="task">
                        <div className="task-title"><h4>Task</h4></div>
                        <div className="my-input">
                            <input value={this.state.inputVal} type="text" placeholder="你想做点什么" onChange={this.addToList.bind(this)}/>
                        </div>
                    </div>
                    <button onClick={this.buttonToList.bind(this)}>Save task</button>
                </div>
            </div>
        );
    }
}

export default Todolist;