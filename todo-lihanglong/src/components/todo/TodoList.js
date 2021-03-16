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