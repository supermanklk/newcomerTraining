/**
 * author: 皮新雷
 * data：12-16
 * description：文字轮播
 */
import React from 'react';
import { Carousel,  WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import style from './index.module.css'

class LuckySlideShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 16,
            slideIndex: 2,
        }
    }

    render(){
        let {recordName} = this.props
        return (
            <WingBlank>
                <Carousel
                    dots={false}
                    autoplayInterval={1000}
                    autoplay={true}
                    infinite
                >
                    {recordName.map((val, index) => (
                        <a
                            key={val + index}
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight,
                            }}
                        >
                            <div className={style.item}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top', color: 'white' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            >
                                {val}
                            </div>
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        )
    }
}

export default LuckySlideShow;