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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myInfo:[
					{title:'姓名',context1:'郑明未'},
					{title:'企业名称',context1:'静宁****食品店'},
					{title:'企业电话',context1:'13333333333'},
					{title:'企业地址',context1:'浙江省丽水市景宁畲族自治县',context2:'红星街道惠民路82号五楼',context3:'501-工位'},
					{title:'服务期限','context1':'2019年9月14日-2020年9月13日'}
				]
			}
		},
		methods: {
			
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
			.info-box:nth-of-type(5){
				margin-top:20rpx;
				.show-info{
					font-size: 26rpx;
				}
			}
		}
	}

</style>
