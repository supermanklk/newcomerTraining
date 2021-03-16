/*
 * @Description  : 
 * @Version      : 1.0
 * @Author       : 李航龙
 * @Date         : 2021-03-16 10:55:00
 * @LastEditors  : 李航龙
 * @LastEditTime : 2021-03-16 18:26:58
 * @FilePath     : \\newcomerTraining\\todo-lihanglong\\src\\components\\todo\\Doing\\DoingList.js
 * Copyright (C) 2021 李航龙. All rights reserved.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sub,changeDid} from '../../../views/action';


class DoingList extends Component {
    handleDel(index){
        this.props.sub(index);
    }
    handleChange(index){
        this.props.changeDid(index);
    }

    render() {
        const {todoList} = this.props;
        return (
            <>
                {todoList && todoList.map((item, index) => {
                    return <ol id="todolist" className="demo-box" key={index}>
                        <li draggable="true">
                            <input type="checkbox" onClick={()=>this.handleChange(index)} checked={false} readOnly={true}/>
                            <p>{item}</p>
                            <a onClick={()=>this.handleDel(index)}>-</a>
                        </li>
                    </ol>
                })}
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = {
    sub,
    changeDid
}

export default connect(mapStateToProps,mapDispatchToProps)(DoingList);