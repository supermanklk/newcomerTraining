import React from 'react';
import '../common/index.css'

import { connect } from 'react-redux';
import {selectScore}  from './actions'
function Loan(props) {

    return (
        <div className='content'>
            <div className="top">网上贷免息</div>
            <div className="center"><span>{props.loan}</span>元</div>
            <div className="bottom" onClick={props.selectScore}>选我</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loan: state.loan
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectScore() {
            dispatch(selectScore())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loan);