/**
 * @Description:
 * @author LuHao
 * @date 2020/12/18
 */
import React, {Component} from 'react';
import './index.css'
import {connect} from 'react-redux'
import {counterReducer} from "./reducer";

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: 'none'
        }
    }
    render() {
        return (
            <div className="news">
                {
                    this.props.text.map(function (value, key) {
                        return (
                            <div key={key} className="new" >
                                <div>
                                    <div className="username">{value.username} · {value.date} · {value.tag}</div>
                                    <div className="title">{value.title}</div>
                                    <div className="description">
                                        <div className="fabulous">
                                            <img src="/img/点赞.png" alt=""/>
                                            {value.fabulous}
                                        </div>
                                        <div className="fabulous ad">
                                            <img src="/img/评论.png" alt=""/>
                                            {value.comment}
                                        </div>
                                        <div className="share ad" >
                                            <img src="/img/分享.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img src={value.url} alt=""/>
                                </div>
                            </div>
                        )
                    }.bind(this))
                }
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.counterReducer.text
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(New);