import React, { Component } from 'react';
import './index.css';

class ToDoList extends Component {
    constructor(props){
        super(props);
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            list: [
                {
                    name: '吃饭',
                    status: false
                },
                {
                    name: '睡觉',
                    status: false
                },
                {
                    name: '敲代码',
                    status: false
                },
            ],
            // input 输入框的值
            inputValue: '',
            // 任务完成的数量
            completeCount: 0
        }
    }

    /**
     * 添加任务
     * @author 霍青利
     * @date 2020/11/26 20:46
     *
    */
    saveTask() {
        if (!this.state.inputValue || !this.state.inputValue.trim()) {
            alert("内容不能为空！");
            this.setState({
                inputValue: ''
            })
            return
        }
        this.setState({
            list: [...this.state.list, {name: this.state.inputValue, status: false}],
            inputValue: ''
        })
    }

    /**
     * 监听 input 输入的内容
     * @author 霍青利
     * @date 2020/11/26 20:47
     * @param e
     *
    */
    handleInputChange(e) {
        // console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }

    /**
     * 计算已完成的任务数量
     * @author 霍青利
     * @date 2020/11/26 20:47
     * @return
    */
    computeCompleteCount() {
        let len = 0;
        this.state.list.map(item => {
            if (item.status) {
                len++;
            }
        })
        return len;
    }

    /**
     *
     * @author 霍青利
     * @date 2020/11/26 20:50
     * @param index 点击完成那一项的索引
     * @param status 点击完成哪一项的status
     * @return
    */
    completeTask(index,status){
        this.state.list[index].status = !status;
        let res = this.computeCompleteCount();
        this.setState({
            list: this.state.list,
            completeCount: res
        })
    }


    render() {
        return (
            <div className="container">
                <div className="todo-list">
                    <h1>TODOLIST</h1>
                    <ul>
                        {
                            this.state.list.map((item,index) => {
                               return (<li className={ item.status === true ? "complete-task" : "" } key={index} ><input type="checkbox" onClick={ () => this.completeTask(index, item.status)}/> <span>{item.name}</span></li>)
                            })
                        }
                    </ul>
                    <p className="list-count">已完成{this.state.completeCount}项/总共{this.state.list.length}项</p>
                </div>
                <div className="add-list">
                   <div className="add-list-input">
                       <strong>Task</strong>
                       <input type="text" value={this.state.inputValue} onChange={(e) => this.handleInputChange(e)}/>
                   </div>
                   <button onClick={() => this.saveTask()}>Save Task</button>
                </div>
            </div>
        )
    }
}

export default ToDoList;