import logo from './logo.svg';
import './App.css';
import {react,Component} from 'react'

class LuckDraw extends Component{

    constructor(props) {
        super(props);
        this.state={
            position:0,
            num:10,
            wish:100,
            prize:[ { img:'/img/01.jpg',name:'柠檬温和去角质',probability:1,activeId:false},
                    { img:'/img/02.jpg',name:'坚果蓝牙音箱',probability:5,activeId:false},
                    { img:'/img/03.jpg',name:'复古灯泡小夜灯',probability:5,activeId:false},
                    { img:'/img/04.jpg',name:'飞比迷你便携式小刀',probability:15,activeId:false},
                    { probability:0},
                    { img:'/img/05.png',name:'氨基酸温和洗面奶',probability:20,activeId:false},
                    { img:'/img/06.jpg',name:'7 点心愿值',probability:25,activeId:false},
                    { img:'/img/07.png',name:'草莓果冻睡眠唇膜',probability:20,activeId:false},
                    { img:'/img/08.png',name:'谢谢参与',probability:9,activeId:false}],
            ownRecord:[],
            notice:[{name:'钱**方',goods:'柠檬温和去角质'},
                    {name:'张**仲',goods:'坚果蓝牙音箱'},
                    {name:'霍**利',goods:'复古灯泡小夜灯'},
                    {name:'陆**豪',goods:'复古灯泡小夜灯'}]
        }
    }
    start=()=>{

        if(this.state.num===0){
            alert('今日次数已用完')
            return
        }
        this.setState({
            num:this.state.num-1,
            wish:this.state.wish-5
        })
        let random = Math.random()*100
        let sum=0
        for(let i=0;i<9;i++){
            sum=sum+ this.state.prize[i].probability
            if(random<=sum){
                this.setState({
                    ownRecord:[...this.state.ownRecord,`抽中 ${this.state.prize[i].name}`]
                })
                this.effect(i,this.state.prize[i].name)
                console.log('位置',i)
                return
            }
        }
    }
    //开始抽奖动画
    effect(props,name){
        let i=0
        let t=this.state.position
        let count=0
        let sum=18
        let timer=setInterval(()=>{
            console.log(i)
            this.state.prize[t][`activeId`] = false
            this.state.prize[i][`activeId`] = true
            this.setState({
                prize:this.state.prize
            })
            count++
            t=i
            if(sum<count&&props==i){
                clearInterval(timer)
                alert(name)
            }
            if(i==3){
                i=0
            } else if(i>6){
                i=i-1
            }else if(i==6){
                i=i-3
            }else if(i>=2&&i<=5){
                i=i+3
            } else{
                i=i+1
            }

        },100)
        console.log('jieshu')
        this.setState({
            position:t
        })
    }
    //显示中奖记录
    record=()=>{
        console.log(this.state.ownRecord)
    }
    render() {
        let _this = this;
        return(
            <div id="luck">
                <div className="count">今日还有 {this.state.num} 次抽奖机会</div>
                <div className="wish">剩余 {this.state.wish} 心愿</div>
                <div className="draw">
                    {
                        this.state.prize.map(function (value,key){
                        if(key!=4){
                            return (
                                <div className={value.activeId? 'prizes' : 'prize'}>
                                    <div className="img"><img src={value.img} /></div>
                                    <div className="name">{value.name}</div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="center">
                                    <div className="start" onClick={()=>_this.start()}>
                                        <div className="startSmall">点击开始抽奖</div>
                                        <div className="startSend">消耗 5 心愿</div>
                                    </div>
                                </div>
                            )
                        }
                    })
                    }
                </div>
                <div className="border">
                </div>
                <div className="notice">
                    <div className="noticeIcon"><img src="/img/通知.png" alt=""/></div>
                    <div className="notices">
                        <div className="run">
                            { this.state.notice.map(function(value,key){
                                return (<div key={key}>恭喜 {value.name} 抽中 {value.goods} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </div>);
                            })
                            }
                        </div>
                    </div>
                </div>
                <div className="record" onClick={()=>this.record()}>
                    中奖记录 >
                </div>
            </div>

        )
    }

}

export default LuckDraw;
