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