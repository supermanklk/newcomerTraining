/*
 * @Description  : 
 * @Version      : 1.0
 * @Author       : 李航龙
 * @Date         : 2021-03-16 10:19:35
 * @LastEditors  : 李航龙
 * @LastEditTime : 2021-03-16 18:26:17
 * @FilePath     : \\newcomerTraining\\todo-lihanglong\\src\\views\\TodoIndex.js
 * Copyright (C) 2021 李航龙. All rights reserved.
 */

import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import TodoInput from "../components/input/TodoInput";
import TodoList from '../components/todo/TodoList';
import TodoFooter from "../components/footer/TodoFooter";

const initState = {
    todoList: localStorage.getItem('todoList') ? Array.from(localStorage.getItem('todoList').split('"').filter((item, index) => index % 2 === 1)) : [],
    didList: localStorage.getItem('didList') ? Array.from(localStorage.getItem('didList').split('"').filter((item, index) => index % 2 === 1)) : [],
}

function reducer(state = initState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todoList: [...state.todoList, action.todo],
                didList: [...state.didList],
            };
        case "SUB_TODO":
            return {
                todoList: [
                    ...state.todoList.slice(0, action.index),
                    ...state.todoList.slice(action.index + 1)
                ],
                didList: [...state.didList]
            };
        case "SUB_DID":
            return {
                todoList: [
                    ...state.todoList
                ],
                didList: [
                    ...state.didList.slice(0, action.index),
                    ...state.didList.slice(action.index + 1)
                ]
            };
        case "CHANGE_DID":
            return {
                todoList: [
                    ...state.todoList.slice(0, action.index),
                    ...state.todoList.slice(action.index + 1)
                ],
                didList: [
                    ...state.didList,
                    ...state.todoList.splice(action.index, 1)
                ]
            };
        case "CHANGE_DOING":
            return {
                didList: [
                    ...state.didList.slice(0, action.index),
                    ...state.didList.slice(action.index + 1)
                ],
                todoList: [
                    ...state.todoList,
                    ...state.didList.splice(action.index, 1)
                ]
            };
        case "CLEAR":
            return {
                todoList: [],
                didList: []
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

class TodoIndex extends Component {
    render() {
        return (
            <Provider store={store}>
                <TodoInput/>
                <TodoList/>
                <TodoFooter/>
            </Provider>
        );
    }
}

export default TodoIndex;