/*
 * @Description  : 
 * @Version      : 1.0
 * @Author       : 李航龙
 * @Date         : 2021-03-16 10:15:55
 * @LastEditors  : 李航龙
 * @LastEditTime : 2021-03-16 18:27:10
 * @FilePath     : \\newcomerTraining\\todo-lihanglong\\src\\components\\todo\\TodoList.js
 * Copyright (C) 2021 李航龙. All rights reserved.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './TodoList.css'

import DoingList from "./Doing/DoingList";
import Did from "./Did/Did";


class TodoList extends Component {
    handleSave() {

    }

    render() {
        const {todoList, didList} = this.props
        return (
            <div>
                <section className="todo-list">
                    <h2 onClick={() => this.handleSave()}>正在进行 <span id="todocount">{todoList?todoList.length:0}</span>
                    </h2>
                    <DoingList/>

                    <h2>已经完成 <span id="donecount">{didList?didList.length:0}</span></h2>
                    <Did/>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todoList: state.todoList,
        didList: state.didList
    }
}


export default connect(mapStateToProps)(TodoList);