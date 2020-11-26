import React,{Component} from 'react'
import Table from "./Table";

class App extends Component{
    constructor(...args){
        super(...args);
        this.state = {
            num: 10,
            name: "zhangzhong",
            age: 24
        }
    }

    setNum(){
        this.setState(
            {num: this.state.num+1})
    }

    render(){
        return (
            <div className="App">
                <h1>Hello React!</h1>
                <h2>My name is{this.state.name} </h2>
                <button onClick={() => this.setNum()}>+1</button>
                {this.state.num}
                <Table/>
            </div>
        )
    }
}

export default App