/**
 * @Description: 红包模块
 * @author 霍青利
 * @date 2020/12/4 16:57
*/
import React from 'react';
import '../common/index.css'

import { connect } from 'react-redux';
import { selectRedPackage } from './actions'

function RedPackage(props) {

    return (
        <div className='content'>
            <div className="top">口碑双12红包</div>
            <div className="center"><span>{props.redPackage}</span>元</div>
            <div className="bottom" onClick={props.selectRedPackage}>选我</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        redPackage: state.redPackage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectRedPackage() {
            dispatch(selectRedPackage())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedPackage);