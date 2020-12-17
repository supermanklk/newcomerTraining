/**
 * author: 皮新雷
 * data：12-15
 * description：抽奖主体js
 */
import React,{Component} from 'react';
import style from './index.module.css';
import LuckyTitle from "./luckyTitle";
import LuckyContent from "./luckyContent";
import LuckyBottom from "./luckyBottom";
import LuckyRecord from "./luckyRecord";

class LuckyDraw extends Component{
    constructor(props){
        super(props);
        this.state = {
            wish: 50, // 心愿值， 默认是50分
            expend: 5, // 每次抽奖需要花费的心愿值
            recordName: [], // 获奖记录
            dataContent : [ // 主体抽奖内容
                {win:'true', probability:'0.0', color:'rgb(255,221,136)', name: '天猫精灵硬糖无线蓝牙智能音箱音响家用智能机器人学习机早教机',src: 'http://gw.alicdn.com/bao/uploaded/i3/60/O1CN01kEEQ2s1CJWPOCIqID_!!60-0-lubanu.jpg'},
                {win:'true', probability:'0.0', color:'rgb(255,221,136)', name: 'MegaHouse手办POP MAX 凯多 海贼 航海王 百兽[现货]',src: 'http://img.alicdn.com/bao/uploaded/i1/2200783807411/O1CN01tI9AW024cHrqgWLYS_!!2200783807411-0-lubanu-s.jpg'},
                {win:'false', probability:'0.5', color:'rgb(255,221,136)', name: 'Mymikku 海贼王 新世界乔巴公仔 2年后乔巴手办模型 超可爱礼物',src: 'http://img.alicdn.com/bao/uploaded/i1/1878890798/TB2sH4fsKJ8puFjy1XbXXagqVXa_!!1878890798.jpg'},
                {win:'true', probability:'0.5', color:'rgb(255,221,136)', name: '火影忍者手办鸣人海贼王盲盒福袋大礼包路飞摆件七龙珠惊喜盒子航',src: 'http://img.alicdn.com/bao/uploaded/i4/3925144330/O1CN017N34lX1hrBZDpZ887_!!0-item_pic.jpg'},
                {win:'true', probability:'0.0', color:'rgb(255,221,136)', name: '海贼王潮流女帝手办街头时尚PPS七武海雕像动漫模型蛇姬机箱摆件',src: 'https://img.alicdn.com/imgextra/i2/1370020013/O1CN014RGQG01Bxzn59FQg0_!!0-saturn_solar.jpg_220x220.jpg'},
                {win:'true', probability:'0.0', color:'rgb(255,221,136)', name: '现货中动MK4发光钢铁侠手办mk3',src: 'http://gw.alicdn.com/bao/uploaded/i3/60/O1CN01kEEQ2s1CJWPOCIqID_!!60-0-lubanu.jpg'},
                {win:'true', probability:'0.0', color:'rgb(255,221,136)', name: '漫趣动漫主题福袋手办礼包限定二次元周边',src: 'https://img.alicdn.com/imgextra/i1/45368872/O1CN012OSvX82FPQXSGfqUV_!!0-saturn_solar.jpg_220x220.jpg'},
                {win:'true', probability:'0.0', color:'rgb(255,221,136)', name: '预约定金 东映动画官方正版授权GReee',src: 'https://img.alicdn.com/imgextra/i1/856140008/O1CN01wUoheY1BvhoM15Ibv_!!0-saturn_solar.jpg_220x220.jpg'},
            ]
        }
    }
    calculatorWash = (newWish) => { // 内容主体点击事件完成后要重新计算心愿值
        let changedWish = JSON.parse(JSON.stringify(newWish))
        this.setState({
            wish: changedWish
        })
    }
    getRecordName = (name) => {
        let recordName = JSON.parse(JSON.stringify(this.state.recordName))
        recordName.push(name)
        this.setState({
            recordName
        })
    }
    render(){
        const {expend, recordName, wish, dataContent} = this.state;
        return (
            <div className={style.page}>
                {/*    头部title部分*/}
                <LuckyTitle wish={wish} expend={expend}/>
                {/*    内容主体区域*/}
                <LuckyContent getRecordName={this.getRecordName} dataContent={dataContent} expend={expend} calculatorWash={this.calculatorWash} wish={wish}/>
                {/*底部滚动条*/}
                <LuckyBottom recordName={recordName}/>
                {/*    中奖记录*/}
                <LuckyRecord recordName={recordName}/>
                <div className={style.line1}></div>
                <div className={style.line2}></div>
            </div>
        );
    }
}


export default LuckyDraw
