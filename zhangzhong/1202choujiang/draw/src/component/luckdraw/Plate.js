/**
 * @Description: Plate.js
 * @author zhangzhong
 * @date 2020/12/1
 */
import React,{Component} from 'react';
import './Plate.css'
import Msg from "./Msg";

class Plate extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '张**',
            flag: 0,
            number1: 5,
            number2: 0,
            timer1: null,
            time: 200,
            left: 0,
            top: 0,
            tem: 5,
            list: [
                {name: '华为手机',probability: 0.1,id: 1,imgSrc: './image/1.jpg'},
                {name: '苹果手机',probability: 0.1,id: 2,imgSrc: './image/2.jpg'},
                {name: '游戏键盘',probability: 0.1,id: 3,imgSrc: './image/3.jpg'},
                {name: '小吃零食',probability: 0.1,id: 4,imgSrc: './image/4.jpg'},
                {name: '点击抽奖',id: 5},
                {name: '女性口红',probability: 0.1,id: 6,imgSrc: './image/6.jpg'},
                {name: '卫生纸抽',probability: 0.1,id: 7,imgSrc: './image/7.jpg'},
                {name: '收纳笔袋',probability: 0.1,id: 8,imgSrc: './image/8.jpg'},
                {name: '谢谢参与',probability: 0.1,id: 9,imgSrc: './image/9.jpg'}
            ],
            msg: [
                {name: '张**仲',content: '苹果手机'},
                {name: '霍**利',content: '游戏键盘'},
                {name: '陆**豪',content: '女性口红'},
            ],

        }
        this.handleGenRes = this.handleGenRes.bind(this);
        this.handleRand = this.handleRand.bind(this);
        this.handleGetRes = this.handleGetRes.bind(this);
        this.handleAutoplay = this.handleAutoplay.bind(this);
        this.handleFilterMsg = this.handleFilterMsg.bind(this);
    }

    /**
     *@FunctionDes:获取抽奖结果将新生成的抽奖结果通过push更新到state中如果“谢谢参与”则不不选哟push更新
     *@Time:2020/12/2
     *
     */
    handleGetRes(msg){
        let arr = this.state.msg;
        setTimeout(() => {
            if (msg !== "谢谢参与"){
                arr.unshift({name: this.state.username,content: msg})
                this.setState({
                    msg: arr
                })
            }
            alert(msg)
        },2000)
    }

    /**
     *@FunctionDes:给dom去设置他的定位和显示
     *@Time:2020/12/2
     *
     */
    handleDirectionshift(leap){
        leap.style.display = "block";
        leap.style.left = this.state.number1+"px";
        leap.style.top = this.state.number2+"px";
    }


    /**
     *@FunctionDes:清楚定位和重置定时器时间
     *@Time:2020/12/2
     *
     */
    clearDate(){
        this.setState({
            number1: 5,
            number2: 0,
            time: 50,
        });
    }


    /**
     *@FunctionDes:执行跑马灯效果和去显示结果，由于跑马灯是异步所以给他绑定定时器，先执行
     *@Time:2020/12/2
     *
     */
    handleGo(){
        if (this.props.wishNum < 4){
            alert("今日次数使用完毕！")
            return
        }
        this.props.changeNum(this.state.tem)
        setTimeout(() => {
            this.handleAutoplay();
        },0)
        this.handleGenRes();
    }


    /**
     *@FunctionDes:通过获取按钮的dom元素去，根据他的定位，判断它的定位到各个临界条件，去控制它的left和top来实现跑马灯效果
     *@Time:2020/12/2
     *
     */
    handleAutoplay(){
        const lottery = document.getElementById('Lid')
        this.clearDate()
        let timer1 = setInterval(() => {
            this.handleDirectionshift(lottery);
            //根据他的定位，判断它的定位到各个临界条件，去控制它的left和top
            if (this.state.number1 < 255 && this.state.number2 === 0){
                this.setState({
                    number1: this.state.number1+125
                })
            } else if (this.state.number2 < 234 && this.state.number1 === 255){        //向下
                this.setState({
                    number2: this.state.number2+117
                })
            } else if (this.state.number1 <= 255 && this.state.number1 > 10){         //向右
                this.setState({
                    number1: this.state.number1-125
                })
            } else if (this.state.number1 === 5 && this.state.number2 > 0){          //向上
                this.setState({
                    number2: this.state.number2-117
                })
            }
            this.setState({
                time: this.state.time+20
            })

            //让他跑个几圈之后，然后判断500ms之后定位到对应奖品的位置
            if (this.state.time > 500 && this.state.number1 === this.state.left && this.state.number2 === this.state.top){
                clearInterval(timer1);
            }

        },this.state.time);


    }


    /**
     *@FunctionDes: 通过设置随机数的范围来设置，中奖率，同时去修改对应中奖物品的定位和将中奖物品传到state的msg中
     * 苹果手机中奖率1%，华为手机5%，游戏键盘，女性口红10%，小吃零食15%，收纳笔袋，生纸抽，收纳笔袋20%，未中奖20%
     *@Time:2020/12/2
     *
     */
    handleGenRes(){
        //先获取随机数
        let num = this.handleRand(100)
        //根据handleRand生成的随机数来判断中了什么奖，并将结果传给handleGetRes，同时修改state中对应中奖物品的定位
        if (num === 100){
            this.handleGetRes('苹果手机');
            this.setState({
                left: 255,
                top: 0
            })

        } else if (num > 95 && num < 100){
            this.handleGetRes('华为手机');
            this.setState({
                left: 130,
                top: 0
            })

        } else if (num > 85 && num <= 95){
            this.handleGetRes('游戏键盘')
            this.setState({
                left: 255,
                top: 117
            })

        } else if (num > 75 && num <= 85){
            this.handleGetRes('女性口红')
            this.setState({
                left: 255,
                top: 234
            })

        } else if (num > 60 && num <= 75){
            this.handleGetRes('小吃零食')
            this.setState({
                left: 5,
                top: 0
            })


        } else if (num > 40 && num <= 60){
            this.handleGetRes('卫生纸抽')
            this.setState({
                left: 5,
                top: 117
            })

        } else if (num > 20 && num <= 40){
            this.handleGetRes('收纳笔袋')
            this.setState({
                left: 5,
                top: 234
            })

        } else if (num > -1 && num <= 20){
            this.handleGetRes('谢谢参与')
            this.setState({
                left: 130,
                top: 234
            })
        }
    }


    /**
     *@FunctionDes: 产生随机函数，生成0-n的正整数,用于产生中奖数字
     *@Time:2020/12/2
     *
     */
    handleRand(n){
        return (Math.floor(Math.random()*n+1));
    }


    /**
     *@FunctionDes:点击“中奖记录”通过filter方法，用当前用户名（this.state.username）筛选出当前该用户的中奖记录
     *@Time:2020/12/2
     *
     */
    handleFilterMsg(){
        const resArr = this.state.msg.filter((item,index) => {
            return (item.name === this.state.username)
        })
        console.log(resArr)
    }

    render(){
        return (
            // 抽奖牌组件
            <div className="plate">
                <ul>
                    {/*通过这个li去定位蒙版*/}
                    <li id="Lid"></li>
                    {   //通过map方法循环出抽奖物品
                        this.state.list.map((item,index) => {
                            // 判断state中list中不是按钮的的id(id为5是中间按钮)去循环出这些奖品的列表
                            if (item.id !== 5){
                                return (
                                    <li key={index}>
                                        <div className="box">
                                            {/*通过src值取到对应的图片*/}
                                            <img src={item.imgSrc} alt=""/>
                                            <p className="box-text">{item.name}</p>
                                        </div>
                                    </li>
                                )
                            } else{
                                return (
                                    //中间id为5的按钮
                                    <li key={index} onClick={() => {
                                        this.handleGo();
                                    }}>
                                        <div className="box-but">
                                            <p className="box-text">{item.name}</p>
                                            <span>消耗{this.state.tem}心愿</span>
                                        </div>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <Msg msg={this.state.msg}/>
                <div className="bottom">
                    <p onClick={() => {
                        this.handleFilterMsg()
                    }}>中奖记录&nbsp;></p>
                </div>
            </div>
        );
    }
}


export default Plate;