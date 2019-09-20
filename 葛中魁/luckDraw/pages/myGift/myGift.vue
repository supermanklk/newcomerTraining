<template>
	<view class="gift-content">
		<view class="content-box">
			<view class="titled">
				我的奖品
			</view>
			<view class="gift-item" v-for="(item,index) in objList">{{index + 1}}.{{item}}</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				objList:[]
			}
		},
		onLoad(options) {
			// debugger;
			console.log(typeof options.item);
			// return;
			var  str = options.item;
			console.log(str.split(','));
			this.objList = str.split(",");
		},
		methods: {
			
		},
		computed:{
			...mapState['giftWrap']
		}
	}
</script>

<style lang="scss" scoped>
.gift-content{
	width: 100vw;
	height: 100vh;
	background: url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2085416026,1186179772&fm=26&gp=0.jpg) no-repeat;
	background-size: 100% auto;
	box-sizing: border-box;
	padding: 30rpx 40rpx;
	.titled{
		text-align: center;
		font-size: 30rpx;
		color: #FFFFFF;
	}
	.content-box{
		border: 15rpx solid #DB2D15;
		background: #EE6A17;
		border-radius: 15rpx;
		color: #271cbc;
		font-size: 20rpx;
		box-sizing: border-box;
		padding: 0 10rpx 20rpx 10rpx;
	}
	.gift-item{
		box-sizing: border-box;
		padding: 3px 33px;
	}
	.gift-item:nth-of-type(odd){
		background:#FCE7BE;
	}
	.gift-item:nth-of-type(even){
		background: #FEF7E8;
	}
}
</style>
