/**
 * @Description: 积分组件
 * @author 霍青利
 * @date 2020/12/4 18:06
*/

import React from 'react';
import '../common/index.css'
import { connect } from 'react-redux';
// 导入 action
import { selectLoan } from './actions'

function Score(props) {

    return (
        <div className='content'>
            <div className="top">支付宝积分</div>
            <div className="center"><span>{props.score}</span>个</div>
            <div className="bottom" onClick={props.selectLoan}>选我</div>
        </div>
    )
}
// 将 store 中的 state 映射到当前组件的 props
const mapStateToProps = (state) => {
    return {
        score: state.score
    }
}

// 将 store 中的 dispatch 映射到当前组件的 props
const mapDispatchToProps = (dispatch) => {
    return {
        selectLoan() {
            dispatch(selectLoan())
        }
    }
}

// 链接 redux 和 react 组件
export default connect(mapStateToProps, mapDispatchToProps)(Score);