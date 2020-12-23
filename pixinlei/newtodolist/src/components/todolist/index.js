import React,{Component} from 'react';
import {connect} from 'react-redux';
import style from './style.module.css'
import {changeChecked, getInputValue, newList} from './action'

class ToDoList extends Component{
    // 渲染todolist
    myToDoList() {
        let myList = this.props.myList
        let res = myList.map((v, i) => {
                return (
                    v.checked
                    ?
                        <div className={style.noBackground} key={i}>
                            <input className={style.check} readOnly={true} onChange={() => {this.props.changeChecked(i)}} type="checkbox" checked={v.checked}/>
                            <del>{v.value}</del>
                        </div>
                    :
                        <div className={style.haveBackground} key={i}>
                            <input className={style.check} readOnly={true} onChange={() => {this.props.changeChecked(i)}} type="checkbox" checked={v.checked}/>
                            {v.value}
                        </div>
                )
            })
        return res
    }
    // 已完成的列表个数
    finishedList() {
        let list = this.props.myList
        let num = 0
        list.forEach((v, i) => {
            if(v.checked) num++
        })
        return num
    }
    render(){
        return (
            <div className={style.page}>
                {/*整个todolist*/}
                <div className={style.todolist}>
                    {/*    头部标题*/}
                    <div className={style.title}><h1>ToDoList</h1></div>
                {/*    中间内容*/}
                <div className={style.content}>
                    {this.myToDoList()}
                    {/*    列表下已完成*/}
                    <div className={style.listBottom}> {this.finishedList()}已完成 / {this.props.myList.length} 总数</div>
                </div>
                    {/*    一条横线*/}
                    <div className={style.line}></div>
                    <div className={style.bottom}>
                            <div className={style.bottomContent}>
                                <div className={style.bottomTitle}><h3>Task</h3></div>
                                <div><input onChange={(e) => {
                                    this.props.getInputValue(e)
                                }} value={this.props.inputValue} className={style.addToList} placeholder="你想做点什么" type="text"/></div>
                            </div>
                        <div className={style.addButton}>
                            <button onClick={() => {this.props.newList()}}>Save Task</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        myList: state.myList,
        inputValue: state.inputValue
    }
}

const dispatchToProps = (dispatch) => {
    return {
        changeChecked(i) {
            dispatch(changeChecked(i))
        },
        getInputValue(e) {
            dispatch(getInputValue(e.target.value))
        },
        newList() {
            dispatch(newList())
        }
    }
}

export default connect(mapStateToProps, dispatchToProps)(ToDoList)