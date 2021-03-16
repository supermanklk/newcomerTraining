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