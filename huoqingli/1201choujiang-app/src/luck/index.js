/**
 * @Description: 抽奖主页面
 * @author 霍青利
 * @date 2020/12/1 14:49
 */
import React,{Component} from 'react';
import LuckItem from "./LuckItem";
// 引入文字跑马灯的插件
import MarqueeText from 'react-marquee-text-component';
import './index.css'


class Luck extends Component{
    constructor(props){
        super(props);
        this.state = {
            luckChance: 10,
            restWishes: 100,
            luckItems: [
                {
                    id: 1,
                    imgUrl: '/static/luck01.jpg',
                    title: "品牌手机"
                },
                {
                    id: 2,
                    imgUrl: '/static/luck02.png',
                    title: "大礼包"
                },
                {
                    id: 3,
                    imgUrl: '/static/luck01.jpg',
                    title: "单反相机"
                },
                {
                    id: 4,
                    imgUrl: '/static/luck02.png',
                    title: "平板"
                },
                {
                    id: 5,
                    imgUrl: '/static/luck01.jpg',
                    title: "谢谢参与"
                },
                {
                    id: 6,
                    imgUrl: '/static/luck02.png',
                    title: "大礼包"
                },
                {
                    id: 7,
                    imgUrl: '/static/luck01.jpg',
                    title: "苹果电脑"
                },
                {
                    id: 8,
                    imgUrl: '/static/luck02.png',
                    title: "机械键盘"
                },

            ],
            // 选中的id
            activeId: '',
            // 中奖结果
            luckResultId: '',
            // 是否正在抽奖
            isRunning: false,
            // 总共需要执行的次数
            runTimes: 0,
            // 当前动画执行的次数
            currentTimes: 0,
            luckInfoList: ['恭喜 陆**豪 抽中单反相机一台','恭喜 张**仲 抽中苹果电脑一台'],
            // luckInfoList: [],
            timer: null
        }
    }

    /**
     * 点击按钮操作
     * @author 霍青利
     * @date 2020/12/1 21:15
     *
     */
    handleClickLuck(){
        let {luckChance,restWishes,isRunning} = this.state;
        if (luckChance <= 0){
            return alert('今天没有抽奖机会啦！');
        } else if (restWishes < 5){
            return alert('心愿不足，快去收集吧！');
        }

        // 如果 isRunning 为 false 的时候才会进行抽奖
        if (!isRunning){
            this.setState({
                activeId: '',
                luckResultId: '',
                runTimes: 0,
                currentTimes: 0,
            },() => {
                this.handleRunning()
            })
        } else{
            alert('正在抽奖，请勿重复点击！');
        }
    }

    /**
     * 抽奖活动进行中
     * @author 霍青利
     * @date 2020/12/2 15:29
     *
     */
    handleRunning(){
        let {luckItems,luckInfoList,luckChance,restWishes} = this.state;

        // 控制每一项出现的概率
        let percent = Math.floor(Math.random()*100+1);
        // 提前确定选中的结果
        if (percent <= 5){
            this.setState({
                luckResultId: luckItems[0].id,
                luckInfoList: [...luckInfoList,'恭喜 张**仲 抽中品牌手机一台']
            })
        } else if (percent > 5 && percent <= 10){
            this.setState({
                luckResultId: luckItems[2].id,
                luckInfoList: [...luckInfoList,'恭喜 陆**豪 抽中单反相机一部']
            })
        } else if (percent > 10 && percent <= 15){
            this.setState({
                luckResultId: luckItems[7].id,
                luckInfoList: [...luckInfoList,'恭喜 张**仲 抽中机械一台']
            })
        } else if (percent > 15 && percent <= 20){
            this.setState({
                luckResultId: luckItems[5].id,
                luckInfoList: [...luckInfoList,'恭喜 陆**豪 抽中大礼包一份']
            })
        } else if (percent > 20 && percent <= 70){
            this.setState({
                luckResultId: luckItems[4].id,
                luckInfoList: [...luckInfoList,'谢谢 霍**利 同学参与，继续加油']
            })
        } else if (percent > 70 && percent <= 90){
            this.setState({
                luckResultId: luckItems[1].id,
                luckInfoList: [...luckInfoList,'恭喜 张**仲 抽中大礼包一份']
            })
        } else if (percent > 90 && percent <= 95){
            this.setState({
                luckResultId: luckItems[3].id,
                luckInfoList: [...luckInfoList,'恭喜 陆**豪 抽中平板电脑一部']

            })
        } else if (percent > 95 && percent <= 100){
            this.setState({
                luckResultId: luckItems[7].id
            })
        }

        // 设置运行的次数
        let runTimes = luckItems.length*(Math.random()*5+3);
        this.setState({
            runTimes: runTimes,
            luckChance: luckChance-1,
            restWishes: restWishes-5
        })

        this.timer = setInterval(() => {
            let tempNum;
            // 如果激活的id和选中的id一致，且当前运行次数大于需要运行的次数时，清除定时器且将是否正在执行置为 false
            if (this.state.activeId === this.state.luckResultId
                && this.state.currentTimes > this.state.runTimes){
                clearInterval(this.timer);
                this.setState({
                    isRunning: false
                })
                return
            }
            // 如果不一致表示正在抽奖
            this.setState({
                isRunning: true
            })
            // 动画执行时对当前激活id的判断
            if (this.state.activeId === ''){
                tempNum = 0;
                this.setState({
                    activeId: tempNum
                })
            } else{
                tempNum = this.state.activeId;
                if (tempNum === 9){
                    tempNum = 0;
                    this.setState({
                        activeId: tempNum
                    })
                } else{
                    tempNum = tempNum+1;
                    this.setState({
                        activeId: tempNum
                    })
                }
            }
            this.setState({
                currentTimes: this.state.currentTimes+1,
            })
        },50)
    }

    // 处理中奖信息
    handleLuckRecord(){
        let luckList = [];
        this.state.luckInfoList.map(item => {
            if (!item.includes("继续加油")){
                luckList.push(item);
            }
            return luckList;
        })
        console.log(luckList);
    }

    render(){
        let {luckChance,restWishes,luckItems,activeId,luckInfoList} = this.state;
        let scrollText = luckInfoList.join(' | ');
        return (
            <div className="container">
                {/* 头部提示区域 */}
                <div className="header">
                    <div className="luck-chance">今日还有 {luckChance} 次抽奖机会</div>
                    <div className="rest-wishes">剩余 {restWishes} 心愿</div>
                </div>

                {/* 抽奖主体区域 */}
                <div className="content">
                    <div className="content-luck-main">
                        <LuckItem luckItem={luckItems[0]} activeId={activeId}></LuckItem>
                        <LuckItem luckItem={luckItems[1]} activeId={activeId}></LuckItem>
                        <LuckItem luckItem={luckItems[2]} activeId={activeId}></LuckItem>
                        <LuckItem luckItem={luckItems[7]} activeId={activeId}></LuckItem>
                        <div className="luck-button" onClick={() => this.handleClickLuck()}>
                            <div className="click-Luck">点击抽奖</div>
                            <div className="consume-wishes">消耗 5 心愿</div>
                        </div>
                        <LuckItem luckItem={luckItems[3]} activeId={activeId}></LuckItem>
                        <LuckItem luckItem={luckItems[6]} activeId={activeId}></LuckItem>
                        <LuckItem luckItem={luckItems[5]} activeId={activeId}></LuckItem>
                        <LuckItem luckItem={luckItems[4]} activeId={activeId}></LuckItem>
                    </div>
                </div>
                {/* 提示中将信息区域 */}
                <div className="luck-tips">
                    <div className="tips-left">
                        <img src="static/laba.png" alt=""/>
                    </div>
                    <div className="tips-right">
                        <MarqueeText text={scrollText}></MarqueeText>
                    </div>
                </div>

                {/* 中奖记录 */}
                <div className="luck-record" onClick={() => this.handleLuckRecord()}>中奖记录 ></div>
            </div>
        );
    }
}

export default Luck;