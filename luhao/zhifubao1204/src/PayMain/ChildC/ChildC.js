import React,{ Component } from 'react'
import {connect } from 'react-redux'
import { addC }  from './action'
import { addB }  from '../ChildB/action'
export class ChildC extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    render() {
        return (
            <div className="choiceOne">
                <div className='title'>网商贷免息</div>
                <div><span>{this.props.num}</span>元</div>
                <div><button onClick={()=>{this.props.addB()}}>选我</button></div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        num:state.counterReducerC.num,
        otherNum:state.counterReducerB.num
    }
}
function mapDispatchToProps(dispatch){
    return {
        addB:()=>{dispatch(addB())},
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(ChildC)