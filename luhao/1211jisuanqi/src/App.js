import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
let numeral = require('numeral')
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',             //结果数据存放
      text: '0',            //显示数据存放
      operator: '',         //存放运算符
      operatorFlag: false,  //运算符替换标志
      OperatorFlag: false,  //运算符标志
      clearFlag: false,     //清零标志
      decimalFlag: false    //小数点标志
    }
  }

  /**
   * Notes:对数据进行重置
   * User: LuHao
   * DateTime: 2020/12/2 16:03
   */
  clear() {
    this.setState({
      text: '0',
      data: '',
      clearFlag: false,
      operatorFlag: false,
      OperatorFlag: false,
      decimalFlag: false
    })

  }

  /**
   * Notes: 再次输入计算，清除上次一次计算结果
   * User: LuHao
   * DateTime: 2020/12/2 16:58
   */
  again(props) {
    this.setState({
      text: props,
      data: '',
      clearFlag: false,
      operatorFlag: false,
      OperatorFlag: false,
      decimalFlag: false
    })
  }

  /**
   * Notes: 将数据显示出来
   * User: LuHao
   * DateTime: 2020/12/2 16:57
   */
  appear(props) {
    if (this.state.text === '0') {
      this.setState({
        text: props
      })
    } else {
      this.setState({
        text: `${this.state.text}${props}`
      })
    }
  }

  /**
   * Notes: 替换显示的运算符号
   * User: LuHao
   * DateTime: 2020/12/2 16:56
   */
  replace(props) {
    this.setState({
      text: this.state.text.slice(0, -1) + props
    })
  }

  /**
   * Notes: 计算运算结果
   * User: LuHao
   * DateTime: 2020/12/2 16:56
   */
  result(props) {
    this.appear(props)
    let sum = 0         //数据结果存放
    let flag = 0        //数据正负状态位
    let number=0
    this.setState({
      clearFlag: true,
      operatorFlag: false,
      OperatorFlag: false,
      decimalFlag: false
    })
    if (this.state.text[0] == '-') {
      flag = -1
    } else {
      flag = 1
    }
    let reg = /(0|([1-9]\d*))(\.\d+)*/g
    let data = this.state.text.match(reg)
    if (data.length < 2) {
      this.setState({
        data: data[0] * flag
      })
    } else {
      switch (this.state.operator) {
        case "+":
          number = numeral(parseFloat(data[0]));
          sum = number.add(parseFloat(data[1]));
          this.setState({data: sum._value});
          break;
        case "-":
          number = numeral(parseFloat(data[0]));
          sum = number.subtract(parseFloat(data[1]));
          this.setState({data: sum._value});
          break;
        case "X":
          number = numeral(parseFloat(data[0]));
          sum = number.multiply(parseFloat(data[1]));
          this.setState({data: sum._value});
          break;
        case "/":
          number = numeral(parseFloat(data[0]));
          sum = number.divide(parseFloat(data[1]));
          this.setState({data: sum._value});
          break;
      }
      this.write(sum)
    }
  }
  /**
   * Notes: 将计算结果写入数据库
   * User: LuHao
   * DateTime: 2020/12/11 10:38
  */
  write(props){
    const url = `http://localhost:8000/index.php/datatest/add?count=${props._value}`;
    fetch(url)
        .then(response => response.json())
        .then(res=>{
          // console.log(1)
        })
  }
  /**
   * Notes: 显示存入数据库的数据
   * User: LuHao
   * DateTime: 2020/12/11 11:26
  */
  read(){
    const url = `http://localhost:8000/index.php/datatest`;
    fetch(url)
        .then(response => response.json())
        .then(res=>{
          res.map(function (value){
            console.log('第',value.id,'次, 结果',value.count)
          })
        })
  }
  /**
   * Notes: 输入运算符号存储、显示
   * User: LuHao
   * DateTime: 2020/12/2 16:59
   */
  operator(props) {
    if (this.state.OperatorFlag) {
      this.result('=')
    } else if (this.state.clearFlag) {
      this.again(props)
    } else if (this.state.operatorFlag == false) {
      this.appear(props)
      this.setState({
        operator: props,
        operatorFlag: true
      })
    } else {
      this.replace(props)
      this.setState({
        operator: props,
      })
    }
    this.setState({
      decimalFlag: false,               //标志位 可以再次输入小数点
    })
  }

  /**
   * Notes: 输入数字存储、显示
   * User: LuHao
   * DateTime: 2020/12/2 16:48
   */
  data(props) {
    //数字输入，有清零标志  作清零理处理
    if (this.state.clearFlag) {
      this.again(props)
    } else {
      this.appear(props)
    }
    //如运算符号已输入，不得再次输入
    if (this.state.operatorFlag) {
      this.setState({
        OperatorFlag: true,             //标志位 再次输入符号判定
      })
    }

  }

  /**
   * Notes: 判定一个数字是否存在小数点
   * User: LuHao
   * DateTime: 2020/12/2 16:47
   */
  decimal(props) {
    if (this.state.decimalFlag == false) {
      this.appear(props)
      this.setState({
        decimalFlag: true,
      })
    }
  }

  render() {
    const {data, text} = this.state;
    return (
        <div id="main">
          <div id="count">
            <div id="result">{text}
              <div className="data">{data}</div>
              <div className="record" onClick={()=>this.read()}>纪录</div>
            </div>
            <div id="buttons">
              <div className="ranks">
                <div className="button firstButton" onClick={() => this.clear()}>AC</div>
                <div className="button firstButton">
                  <div>
                    <span className="add">+</span>
                    /
                    <span className="del">-</span>
                  </div>


                </div>
                <div className="button firstButton">%</div>
                <div className="button buttonSymbol" onClick={() => this.operator('/')}>÷</div>
              </div>
              <div className="ranks">
                <div className="button" onClick={() => this.data(7)}>7</div>
                <div className="button" onClick={() => this.data(8)}>8</div>
                <div className="button" onClick={() => this.data(9)}>9</div>
                <div className="button buttonSymbol" onClick={() => this.operator('X')}>X</div>
              </div>
              <div className="ranks">
                <div className="button" onClick={() => this.data(4)}>4</div>
                <div className="button" onClick={() => this.data(5)}>5</div>
                <div className="button" onClick={() => this.data(6)}>6</div>
                <div className="button buttonSymbol" onClick={() => this.operator('-')}>-</div>
              </div>
              <div className="ranks">
                <div className="button" onClick={() => this.data(1)}>1</div>
                <div className="button" onClick={() => this.data(2)}>2</div>
                <div className="button" onClick={() => this.data(3)}>3</div>
                <div className="button buttonSymbol" onClick={() => this.operator('+')}>+</div>
              </div>
              <div className="ranks">
                <div className="buttonZero" onClick={() => this.data(0)}>0</div>
                <div className="button" onClick={() => this.decimal('.')}>.</div>
                <div className="button buttonSymbol" onClick={() => this.result('=')}>=</div>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

export default App;
