/*
 * @Description  : 
 * @Version      : 1.0
 * @Author       : 李航龙
 * @Date         : 2021-03-16 10:55:06
 * @LastEditors  : 李航龙
 * @LastEditTime : 2021-03-16 18:26:49
 * @FilePath     : \\newcomerTraining\\todo-lihanglong\\src\\components\\todo\\Did\\Did.js
 * Copyright (C) 2021 李航龙. All rights reserved.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {subdid, changeDoing} from '../../../views/action';

class Did extends Component {

    handleDel(index){
        this.props.subdid(index);
    }
    handleChange(index){
        this.props.changeDoing(index);
    }

    render() {
        return (
            <>
                {this.props.didList.map((item,index)=>{
                    return <ul id="donelist" key={index}>
                        <li draggable="true">
                            <input type="checkbox" checked="checked" readOnly={true} onClick={()=>this.handleChange(index)}/>
                            <p>{item}</p>
                            <a onClick={()=>this.handleDel(index)}>-</a>
                        </li>
                    </ul>
                })}
            </>
        );
    }
}



function mapStateToProps(state) {
    return {
        didList: state.didList
    }
}

const mapDispatchToProps = {
    subdid,
    changeDoing
}

export default connect(mapStateToProps, mapDispatchToProps)(Did);