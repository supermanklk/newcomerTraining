import React,{Component} from 'react'

class ToDolist extends Component{
        constructor(...args){
            super(...args);
            this.state ={
                list:[
                    { name : '吃饭',ischecked : false},
                    { name : '睡觉',ischecked : false},
                    { name : '打豆豆',ischecked : false},
                    { name : '看电影',ischecked : false},
                    { name : '写代码',ischecked : false}
                ]
            }
        }

        render(){
            return(
                <div className="box">

                </div>
            )
        }
}