<template>
	<view class="content">
		<view class="luck-content">     <!--上部分抽奖-->
			<view class="luck-count">   <!--剩余抽奖次所和我的奖品-->
				<view class="count">
					<text>抽奖次数:</text>
					<text class="count-num" v-text="luckNumCount"></text>
				</view>
				<view class="my-gift" @click="toMygift">
					我的奖品>
				</view>
			</view>
			<view class="content-box">
				<view class="luck-draw" id="luck-draw">    <!--转盘 start-->
					<view :class="linear? 'luck-main linear':'luck-main'" :style=" 'transform:rotate(' + luckRotate + 'deg)'">
						<view class="luck-item" v-for="(item,index) in itemsCount[typeIndex]" :style=" 'transform: rotate('+ index*40 +'deg) skew(50deg);' ">
							<view class="item-view">
								<view class="item-text">{{item.title}}</view>
								<image :src="item.url" mode=""></image>
							</view>
						</view>
					</view>
					<view class="draw-pointer">
						<view class="title-piont" @click="start()">
							开始
						</view>
						
					</view>
				</view>                                  <!--转盘end-->
				<view class="luck-type-content">
					<view @click="checkType(index)" v-for="(item,index) in typeArr"  :class="typeIndex==index? 'type-item type-on':'type-item'">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
		<view class="luck-des">
			<view class="des-content">
				<view class="title-text">
					规则说明
				</view>
				<view class="text-list">
					<view v-for="(item,index) in desText">{{index + 1}}.{{item.str}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				luckNumCount:5,
				luckRotate:0,
				itemsCount:[
					[
						{title:'现金1.98',url:'../../static/icon-gods.png'},
						{title:'现金1.08',url:'../../static/icon-like.png'},
						{title:'现金1.00',url:'../../static/icon-gift.png'},
						{title:'现金1.28',url:'../../static/icon-gods.png'},
						{title:'谢谢参与',url:'../../static/icon-like.png'},
						{title:'经验1点',url:'../../static/icon-like.png'},
						{title:'积分2点',url:'../../static/icon-like.png'},
						{title:'现金1.68',url:'../../static/icon-like.png'},
						{title:'现金1.88',url:'../../static/icon-gift.png'}
					],
					[
						{title:'现金100',url:'../../static/icon-gods.png'},
						{title:'现金200',url:'../../static/icon-like.png'},
						{title:'现金300',url:'../../static/icon-gift.png'},
						{title:'现金428',url:'../../static/icon-gods.png'},
						{title:'谢谢参与',url:'../../static/icon-like.png'},
						{title:'陷阱588',url:'../../static/icon-like.png'},
						{title:'现金688',url:'../../static/icon-like.png'},
						{title:'现金768',url:'../../static/icon-like.png'},
						{title:'现金888',url:'../../static/icon-gift.png'}
					]
				],
				desText:[
					{str:'用户登录即送一次抽奖机会,分享好友则多送一次'},
					{str:'用户点击大转盘抽奖按钮,有积分和现金两种抽奖方式,没抽中一次消耗一次机会'},
					{str:'用户获得的讲评,可在我的道具中查看'}
				],
				linear:true,
				doing:false,
				typeArr:[
					{title:'幸运抽奖'},
					{title:'现金抽奖'}
				],
				typeIndex:0,
				giftArr:[]
			}
		},
		onLoad() {
			
		},
		methods: {
			toMygift(){
				var _this = this;
				// var navData = JSON.stringify(); 
				uni.navigateTo({
					url:'../myGift/myGift?item=' + _this.giftArr
				})
			},
			checkType(index){
				this.typeIndex = index;
			},
			start(){
				this.linear = true;
				var ramdom = parseInt(Math.random()*9),  //0-8随机数
					ringCount = 3*360,                   //过渡圈数
					deg = -ringCount - (ramdom*40);           //总旋转角度
				if(!this.doing && this.luckNumCount >0){
					this.doing = true;   
					this.luckRotate = deg;
					this.luckNumCount --;
					console.log(deg);   
					setTimeout(()=>{
						console.log(ramdom);   
						uni.showModal({
							content: this.itemsCount[this.typeIndex][ramdom].title,
							showCancel: false,
							success: () => {
								this.luckRotate = 0;
								this.doing = false;
								if(this.itemsCount[this.typeIndex][ramdom].title !== '谢谢参与'){
									this.giftArr.push(this.itemsCount[this.typeIndex][ramdom].title);
								}else{
									return;
								}
								
							}
						});
						this.linear = false;
					},3100)
				}else{
					return 'doing'
				}
			}
		}
	}
</script>

<style lang="scss">

.content{
		width: 100vw;
		height:100vh;
		overflow:hidden;
		.luck-content{
			width: 100%;
			box-sizing: border-box;
			padding: 25rpx 25rpx 150rpx 25rpx;
			background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568782507785&di=7a0435be0012d05222091ac1e6b13ef1&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F21%2F20170321153911_E8YCa.jpeg) no-repeat;
			background-size: 100%;
			.luck-count{
				display:flex;
				justify-content: space-between;
				color: #915E59;
				font-size: 25rpx;
				view{
					border: 1px solid #915E59;
					border-radius: 25rpx;
					padding:5rpx 10rpx;
				}
				.count-num{
					color: #87314A;
				}
			}
			.luck-draw{
				margin-top: 100rpx;
				position: relative;
				transform:rotate(75deg);
				.linear{
					transition:transform ease-in-out 3s;
				}
				.luck-main{
					width: 500rpx;
					height: 500rpx;
					border-radius: 50%;
					overflow: hidden;
					box-shadow: 0 0  5rpx 25rpx #EC2F36;
					position: relative;
					margin: auto;
					
					.luck-item{
						overflow: hidden;
						width: 250rpx;
						height: 250rpx;
						background: #FEF7E8;
						position: absolute;
						box-shadow: 0 0 1px #EC2F36 inset;
						transform-origin: bottom right;
						box-sizing:border-box;
						.item-view{
							font-size: 25rpx;
							position: absolute;
							bottom: 30rpx;
							right: 0;
							margin: auto;
							text-align: center;
							transform: skew(-50deg) rotate(-70deg) translate(-15rpx,15rpx);
							.item-text{
								width: 162rpx;
								text-align: center;
								margin: auto;
								color: #E98685;
								background: #FCE7BE;
							}
						}
						image{
							margin-top: 20rpx;
							width: 40rpx;
							height: 40rpx;
						}
					}
				}
				.draw-pointer{
					transform: rotate(-75deg);
					position: absolute;
					border-radius: 50%;
					top: 50%;
					left: 50%;
					margin-left: -40rpx;
					margin-top: -40rpx;
					background: #A06567;
					.title-piont{
						width: 80rpx;
						height: 80rpx;
						display: table-cell;
						vertical-align:middle;
						font-size: 25rpx;
						text-align: center;
						color: #AE9D9C;
					}
				}
				.draw-pointer:before{
					content:'';
					position: absolute;
					top: -40rpx;
					left: 13rpx;
					width: 0;
					height: 0;
					border-top: 30rpx solid transparent;
					border-left: 30rpx solid transparent;
					border-right: 30rpx solid transparent;
					border-bottom: 30rpx solid #A06567;
				}
			}
		}
	}
	.content-box{
		position: relative;
		.luck-type-content{
			position: absolute;
			right: 30rpx;
			bottom: -60rpx;
			.type-item{
				font-size: 25rpx;
				color: #EC2F36;
				padding: 5rpx 10rpx;
				border-radius: 50rpx;
				border: 2px solid #EC2F36;
				margin-top: 15rpx;
			}
			.type-on{
				color: #FFFFFF;
				background: #EC2F36;
			}
		}
	}
	.luck-des{
		width: 100%;
		background:url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2085416026,1186179772&fm=26&gp=0.jpg) no-repeat;
		position:relative;
		background-size:100% auto;
		width: 1200rpx;
		height: 600rpx;
		left: 50%;
		margin-left: -600rpx;
		top: -80rpx;
		z-index: 111;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
		color: #FFFFFF;
		font-size: 20rpx;
		.des-content{
			position: relative;
			top:25rpx;
			z-index: 999;
			width: 80vw;
			margin:auto;
			border: 15rpx solid #DB2D15;
			background: #EE6A17;
			border-radius: 15rpx;
			box-sizing: border-box;
			padding: 25rpx 25rpx 40rpx 25rpx;
			view{
				line-height: 30rpx;
				letter-spacing: 5rpx;
			}
		}
		.title-text{
			font-size: 30rpx;
			text-align: center;
			margin: 20rpx 0;
		}
		
	}
</style>
