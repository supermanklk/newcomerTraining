import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addB} from './action'
import {addC} from "../ChildC/action";
import './ChildB.css'
export class ChildB extends Component {
    constructor(props) {
        super(props);
        this.state= {

        }
    }
    render() {
        return (
            <div className="choiceOne">
                <div className='title'>支付宝积分</div>
                <div><span>{this.props.num}</span>个</div>
                <div><button onClick={()=>{this.props.addC()}}>选我</button></div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        num:state.counterReducerB.num,
        otherNum:state.counterReducerC.num
    }
}

function mapDispatchToProps(dispatch){
    return {
        addC:()=>{dispatch(addC())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChildB)