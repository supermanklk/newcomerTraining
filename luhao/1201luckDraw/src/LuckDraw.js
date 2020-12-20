/**
 * @Description: 九宫格抽奖
 * @author luhao
 * @date 2020/12/1
 */
import './LuckDraw.css';
import {Component} from 'react'

class LuckDraw extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: 0,         //存放动画上次运行位置
            startFlag: true,     //判定抽奖状态
            ownRecord: [],       //抽奖记录
            num: 10,             //每日抽奖次数
            wish: 100,           //心愿值
            prize: [              //商品信息
                {img: '/img/01.jpg', name: '柠檬温和去角质', probability: 1, activeId: false},
                {img: '/img/02.jpg', name: '坚果蓝牙音箱', probability: 5, activeId: false},
                {img: '/img/03.jpg', name: '复古灯泡小夜灯', probability: 5, activeId: false},
                {img: '/img/04.jpg', name: '飞比迷你便携式小刀', probability: 15, activeId: false},
                {probability: 0},
                {img: '/img/05.png', name: '氨基酸温和洗面奶', probability: 20, activeId: false},
                {img: '/img/06.jpg', name: '7 点心愿值', probability: 25, activeId: false},
                {img: '/img/07.png', name: '草莓果冻睡眠唇膜', probability: 20, activeId: false},
                {img: '/img/08.png', name: '谢谢参与', probability: 9, activeId: false}
                ],
            notice: [              //通知中奖信息
                {name: '钱**方', goods: '柠檬温和去角质'},
                {name: '张**仲', goods: '坚果蓝牙音箱'},
                {name: '霍**利', goods: '复古灯泡小夜灯'},
                {name: '陆**豪', goods: '复古灯泡小夜灯'}
                ],
        }
    }
    /**
     * Notes: 点击抽奖
     * User: LuHao
     * DateTime: 2020/12/2 12:18
    */
    start() {
        if (this.state.startFlag) {               //判定抽奖是否已经在进行
            if (this.state.num === 0) {           //判定抽奖次数，次数为0，提示
                alert('今日次数已用完')
                return
            }
            this.setState({
                num: this.state.num - 1,
                wish: this.state.wish - 5
            })
            let random = Math.random() * 100       //生成随机数，根据百分比确定抽中奖品
            let sum = 0
            for (let i = 0; i < 9; i++) {
                sum = sum + this.state.prize[i].probability
                if (random <= sum) {
                    this.prize(i)
                    return
                }
            }
        } else {
            alert('正在执行')
        }
    }
    /**
     * Notes:记录抽中商品，跳转执行抽奖动画
     * User: LuHao
     * DateTime: 2020/12/2 15:43
    */
    prize(props){
        this.setState({
            ownRecord: [...this.state.ownRecord, `抽中 ${this.state.prize[props].name}`],
            position: props,
            startFlag: false
        })
        this.effect(props, this.state.prize[props].name)
    }
    demo(){
        alert(111)
    }
    /**
     * Notes: 开始抽奖动画
     * User: LuHao
     * DateTime: 2020/12/2 12:17
    */
    effect(props) {
        let i = 0
        let t = this.state.position     //存放上一位选中位置
        let count = 0                    //计数
        let sum = 18                     //选择两圈次数
        let timer = setInterval(() => {
            this.state.prize[t][`activeId`] = false         //对上一个样式清除
            this.state.prize[i][`activeId`] = true          //对下一个样式添加
            this.setState({
                prize: this.state.prize
            })
            count++
            t = i
            //旋转2圈后开始停下
            if (sum < count && props == i) {
                clearInterval(timer)
                this.setState({
                    startFlag: true
                })
            }
            //动画顺序
            switch (i) {
                case 3: i=0;break;
                case 6: i=3;break;
                case 7:
                case 8: --i;break;
                case 0:
                case 1: ++i;break
                default:i=i+3;break
            }
        }, 150)

    }
    /**
     * Notes: 输出中奖记录
     * User: LuHao
     * DateTime: 2020/12/2 12:18
    */
    record = () => {
        this.state.ownRecord.map(function (value) {
            console.log(value)
        })
    }

    render() {
        const {num,wish,prize,notice}=this.state
        return (
            <div id="luck">
                <div className="count">今日还有 {num} 次抽奖机会</div>
                <div className="wish">剩余 {wish} 心愿</div>
                <div className="draw">
                    {
                        prize.map(function (value, key) {
                            if (key != 4) {
                                return (
                                    <div key={key} className={value.activeId ? 'prizes' : 'prize'}>
                                        <div className="img"><img src={value.img}/></div>
                                        <div className="name">{value.name}</div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={key} className="center">
                                        <div className="starts" onClick={()=>{this.start()}}>
                                            <div className="startSmall">点击开始抽奖</div>
                                            <div className="startSend">消耗 5 心愿</div>
                                        </div>
                                    </div>
                                )
                            }
                        }.bind(this))
                    }
                </div>
                <div className="border">
                </div>
                <div className="notice">
                    <div className="noticeIcon"><img src="/img/通知.png" alt=""/></div>
                    <div className="notices">
                        <div className="run">
                            {  notice.map(function (value, key) {
                                return (<div
                                    key={key}>恭喜 {value.name} 抽中 {value.goods} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </div>);
                            })
                            }
                        </div>
                    </div>
                </div>
                <div className="record" onClick={() => this.record()}>
                    中奖记录 >
                </div>
            </div>

        )
    }

}

export default LuckDraw;
