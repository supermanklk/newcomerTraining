<template>
	<view class="container">
		<view class="info-box" v-for="(item,index) in myInfo" :key="index">
			<text v-text="item.title"></text>
			<view class="show-info">
				<view class="show-text1" v-text="item.context1">
					
				</view>
				<view class="show-text2" v-if="item.context2" v-text="item.context2">
					
				</view>
				<view class="show-text3" v-if="item.context3" v-text="item.context3">
					
				</view>
			</view>
		</view>
		<view class="copy-bar">
			<view class="copy-btn" @click="copyBar">
				一键复制
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myInfo:[
					{title:'企业名称',context1:'静宁****食品店'},
					{title:'税号',context1:'913300000000000000'},
					{title:'开户银行',context1:'中国银行股份有限公司景宁县支行'},
					{title:'银行账号',context1:'354000000000'},
					{title:'企业地址',context1:'浙江省丽水市景宁畲族自治县',context2:'红星街道惠民路82号五楼',context3:'501-工位'}
				]
			}
		},
		methods: {
			copyBar(){
				let copyText = '';
				for(let i of this.myInfo){
					copyText += i.context1 + ',';
					if(i.context2){
						copyText+= i.context2 + ',';
						if(i.context3){
							copyText += i.context3;
						}
					}
				}
				uni.setClipboardData({
					data:copyText
				})
				console.log(copyText);
			}
		},
		watch:{
			
		},
		onLoad() {
			
		}
	}
</script>

<style  lang="scss">
	page{
		background:#EFEFF4;
		.container{
			font-family:PingFangSC-Regular;
			width: 100%;
			box-sizing:border-box;
			.info-box{
				margin-top: 1rpx;
				margin-left: 0 !important;
				width: 100%;
				background: #FFFFFF;
				padding:28rpx 71rpx 29rpx 34rpx;
				box-sizing: border-box;
				display:flex;
				justify-content: space-between;
				text{
					width: 136rpx;
					font-size: 34rpx;
					color: #000000;
					text-align: left;
					white-space: nowrap;
					
				},
				.show-info{
					text-align: right;
					margin-left: 59rpx;
					font-size:34rpx;
					white-space: pre-wrap;
					color: #888888;
					line-height: 48rpx;
				}
			}
			.copy-bar{
				padding:28rpx 71rpx 29rpx 34rpx;
				width: 100%;
				box-sizing: border-box;
				display:flex;
				margin-top: 30rpx;
				justify-content:flex-end;
				align-items:center;
				.copy-btn{
					width: 360rpx;
					height: 70rpx;
					line-height: 70rpx;
					color: #1AAD19;
					font-size: 32rpx;
					border-radius:10rpx ;
					border: 2px solid #1AAD19;
					text-align: center;
				}
				.copy-btn:active{
					background: #0E8EFF;
					border: none;
					color: #FFFFFF;
				}
			}
			
		}
	}

</style>
