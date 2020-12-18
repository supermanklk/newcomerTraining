/*
* auther: 皮新雷
* day: 2020-12-18
* description: 这是一个todolist/ redux重构
*  */
import React,{Component} from 'react';
import './todolist.css'
import store from "./redux/store";


class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = {
            ...store.getState()
        }

    }

    componentDidMount(){
        store.subscribe(() => {
            this.setState({...store.getState()})
        })
    }

    // 渲染myList列表的数据
    renderList(){
        return (
            this.state.myList.map((v,i) => {
                return (
                    <div key={i} className={v.checkbox ? 'itemGreen' : 'item'}>
                        <input id={i} type="checkbox" checked={v.checkbox} onChange={this.myNewList.bind(this,i)}/>
                        <label htmlFor={i}>
                            {v.checkbox ? (<del>{v.value}</del>) : (v.value)}
                        </label>
                    </div>
                )
            })
        )
    }

    // 已经完成了的任务数
    finishedTask(){
        let num = 0
        this.state.myList.forEach((v,i) => {
            if (v.checkbox){
                num++
            }
        })
        return num
    }

    //点击了CheckBox之后需要调用render,改变state里myList
    myNewList(i){
        let myList = this.state.myList
        myList[i].checkbox = !myList[i].checkbox
        this.setState({
            myList: myList
        })

    }

    //监听input框中数据的改变
    addToList(e){
        const action = {
            type: 'ADD_TO_LIST',
            value: e.target.value
        }
        store.dispatch(action)
    }

    //将input框中的值添加到list中
    buttonToList(){
        if (this.state.inputValue === ''){
            return
        }
        const action = {
            type: 'BUTTON_TO_LIST',
        }
        store.dispatch(action)
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
                            <input className="inputValue" value={this.state.inputValue} type="text"
                                   placeholder={this.state.placeholder}
                                   onChange={this.addToList.bind(this)}/>
                        </div>
                    </div>
                    <button onClick={this.buttonToList.bind(this)}>Save task</button>
                </div>
            </div>
        );
    }
}

export default Todolist;