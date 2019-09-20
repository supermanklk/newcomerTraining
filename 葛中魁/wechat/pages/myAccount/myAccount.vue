<template>
	<view class="container">
		<view class="info-box" v-for="(item,index) in accountInfo" :key="index">
			<text v-text="item.title"></text>
			<view class="show-info" v-text="item.context">
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				accountInfo:[
					{context:'景晨卫龙食品店',title:'账户名称'},
					{context:'3500000000',title:'账户号码'},
					{context:'中国银行股份有限公司静宁县支行',title:'开户银行'},
					{context:'郑明伟',title:'法人'}
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
					text-align-last: justify;
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
		}
	}

</style>
