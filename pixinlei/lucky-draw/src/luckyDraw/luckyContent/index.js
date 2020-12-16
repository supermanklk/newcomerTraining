/**
 * author: 皮新雷
 * data：12-15
 * description：抽奖主体内容部分
 */
import React,{Component} from 'react';
import Style from './index.module.css'

class LuckyContent extends Component{
    constructor(props){
        super(props);
        this.state = {...props, canRun: true}
    }

    thingsFunction(i){ // 渲染抽奖的物品的函数
        let src = this.props.dataContent[i].src
        let name = this.props.dataContent[i].name
        return (
            <div className={Style.things} style={{background: this.state.dataContent[i].color}}>
                <img src={src} alt=""/>
                <div className={Style.title}>{name}</div>
            </div>
        )
    }

    clickDiv(drawFunction){ // 中间的div，点击抽奖
        return (
            <div className={Style.startDraw} onClick={drawFunction}>
                <div className={Style.bigTitle}> 点击抽奖</div>
                <div className={Style.smallTitle}> 消耗 {this.props.expend} 心愿</div>
            </div>
        )
    }

    probabilityFunction(){ // 中奖概率，设置中了那个奖
        let probability = this.props.dataContent.map((v) => {
            return v.probability*10
        })
        let myMap = [] // 按概率取得字典
        probability.forEach((v,index) => {
            for (let i = 0; i < v; i++) {
                myMap.push(index)
            }
        })
        let result = myMap[Math.floor(Math.random()*myMap.length)]
        return result
    }

    render(){
        let drawFunction = () => { // 点击启动抽奖
            if(!this.state.canRun) return
            this.setState({
                canRun: false
            })
            if (this.props.wish < this.props.expend){
                alert('心愿不足，无法抽奖')
                return
            }
            let newWish = JSON.parse(JSON.stringify(this.props.wish))-JSON.parse(JSON.stringify(this.props.expend))
            this.props.calculatorWash(newWish)
            let times = 8+this.probabilityFunction() // 旋转次数
            let that = this
            let dataContent = JSON.parse(JSON.stringify(that.state.dataContent)) // 保存一份初始数据
            let changedDataContent = JSON.parse(JSON.stringify(that.state.dataContent)) // 会频繁改动的数据
            let number = 0 // 从位置0开始旋转
            function cssAnimation(){
                changedDataContent = JSON.parse(JSON.stringify(dataContent))
                if (number !== times){
                    if (number >= dataContent.length){
                        changedDataContent[number-8].color = 'red'
                    } else{
                        changedDataContent[number].color = 'red'
                    }
                    number++
                    that.setState({
                        dataContent: changedDataContent
                    })
                    setTimeout(() => {
                        cssAnimation()
                    },number*100)
                } else if (number === times){
                    alert(`恭喜你抽中了${changedDataContent[number-8].name}`)
                    that.props.getRecordName(changedDataContent[number-8].name)
                    setTimeout(() => {
                        that.setState({
                            canRun: true
                        })
                    }, 0)
                    changedDataContent = JSON.parse(JSON.stringify(dataContent))
                    that.setState({
                        dataContent: changedDataContent
                    })
                }
            }

            cssAnimation()
        }

        return (
            <div className={Style.page}>
                {this.thingsFunction(0)}
                {this.thingsFunction(1)}
                {this.thingsFunction(2)}
                {this.thingsFunction(7)}
                {this.clickDiv(drawFunction)}
                {this.thingsFunction(3)}
                {this.thingsFunction(6)}
                {this.thingsFunction(5)}
                {this.thingsFunction(4)}
            </div>
        );
    }

}

export default LuckyContent