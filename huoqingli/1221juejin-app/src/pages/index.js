/**
 * @Description: 掘金首页
 * @author 霍青利
 * @date 2020/12/17 16:41
*/
import React,{Component} from 'react';
import Header from "./components/header";
import Content from "./components/content";
import './index.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            contentNavList: [ '推荐', '后端', '前端', 'Android', 'iOS', '人工智能', '开发工具', '代码人生', '阅读' ]
        }
    }
    render(){
        let {contentNavList} = this.state;
        return (
            <div className="view-container">
                <Header contentNavList={contentNavList}/>
                <Content />
            </div>
        );
    }
}

export default App;