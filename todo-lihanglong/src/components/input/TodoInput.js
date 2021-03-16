import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add} from '../../views/action';
import './TodoInput.css'

class TodoInput extends Component {
    constructor() {
        super();
        this.state = {
            searchkey: ""
        };
    }

    componentDidMount() {
        this.input.focus();
    }

    hangleAdd(event, value) {
        event.preventDefault();

        this.props.add(value);
        this.input.value = '';
        this.setState({
            seacrchKey: ""
        });
    }

    change(value) {
        this.setState({
            searchkey: value
        })
    }

    render() {
        return (
            <div>
                <header>
                    <section>
                        <form onSubmit={(e) => this.hangleAdd(e, this.state.searchkey)}>
                            <label htmlFor="title">ToDoList</label>
                            <input type="text" id="title" name="title" placeholder="添加ToDo" required="required"
                                   autoComplete="off" ref={(input) => this.input = input}
                                   onChange={(e) => this.change(e.target.value)}/>
                        </form>
                    </section>
                </header>
            </div>
        );
    }
}

function mapStateToProps() {
    return {}
}

const mapDispatchToProps = {
    add
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);