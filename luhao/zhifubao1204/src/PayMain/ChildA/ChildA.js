import React, { Component } from 'react'
import {connect} from 'react-redux'
import {add} from './action'
import './ChildA.css'
export class ChildA extends Component {
    constructor(props) {
        super(props);
        this.state= {

        }
    }
    render() {
        return (
            <div className="choiceOne">
                <div className='title'>口碑双12红包</div>
                <div><span>{this.props.num}</span>元</div>
                <div><button onClick={()=>{this.props.add()}}>选我</button></div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        num:state.counterReducer.num,
    }
}

function mapDispatchToProps(dispatch){
    return {
        add:()=>{dispatch(add())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChildA)