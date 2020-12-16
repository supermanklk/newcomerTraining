/**
 * author: 皮新雷
 * data：12-16
 * description：文字轮播
 */
import React from 'react';
import ReactSwipe from 'react-swipe';
import Style from './index.module.css'

class LuckySlideShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            RecordName: [...['默认测试数据1','默认测试数据2'],...this.props.RecordName],
        }

    }

    scrollData() { // 需要滚动的数据
        let RecordName = JSON.parse(JSON.stringify(this.state.RecordName))
        return (
            RecordName.map((v,i) => {
                return (
                    <div className="carousel-item" key={i}>
                        <ul className='clear-fix'>
                            <div className={Style.data}>恭喜皮新雷获得{v}</div>
                        </ul>
                    </div>
                )
            })
        )
    }

    newScrollData() { // 实际传过来的数据
        let RecordName = JSON.parse(JSON.stringify(this.props.RecordName))
        console.log(RecordName)
        return (
            RecordName.map((v,i) => {
                return (
                    <div className="carousel-item" key={i}>
                        <ul className='clear-fix'>
                            <div className={Style.data}>恭喜皮新雷获得{v}</div>
                        </ul>
                    </div>
                )
            })
        )
    }
    render(){
        let opt = {
            auto: 500,
            speed: 5000,
        }

        let renderMyOwnData = () => { // 判断this.props.RecordName是否有值，来看是否换上真实数据
            if(this.props.RecordName === []) {
                // scrollData()
            } else {

            }
        }
        return (
            <div id="home-category">
                <ReactSwipe className={Style.carousel} swipeOptions={opt}>
                    {this.scrollData(this)}
                    {/*{this.a()}*/}
                    {this.newScrollData(this)}
                </ReactSwipe>
            </div>
        )
    }
}

export default LuckySlideShow;