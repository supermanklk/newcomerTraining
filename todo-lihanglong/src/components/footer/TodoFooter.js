/*
 * @Description  : 
 * @Version      : 1.0
 * @Author       : 李航龙
 * @Date         : 2021-03-16 10:24:23
 * @LastEditors  : 李航龙
 * @LastEditTime : 2021-03-16 18:26:27
 * @FilePath     : \\newcomerTraining\\todo-lihanglong\\src\\components\\footer\\TodoFooter.js
 * Copyright (C) 2021 李航龙. All rights reserved.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clear} from '../../views/action';

class TodoFooter extends Component {
    handleClear() {
        this.props.clear()
    }

    render() {
        return (
            <div>
                <footer>
                    Copyright © 2014 todolist.cn <a onClick={() => this.handleClear()}>clear</a>
                </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {
    clear
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter);