<template>
	<view class="content">				<!--背景层-->
		<view class="container">		<!--内容区域-->
			<view class="search-box">   <!--搜索区域-->
				<text>店铺字号 :</text>
				<input type="text" value="" class="info-input" v-model="keyWord"/>
				<view class="go-search" @click="getInfo(keyWord)">
					查
				</view>
			</view>
			<view class="show-box">     <!--展示区域-->
				<view class="show-name">
					<input type="text"  class="show-content" v-model="getName"/> <view class="copy-btn copy-name" @click="copyContext(getName)">复制姓名</view>
				</view>
				<view class="show-phone">
					<input type="number" value="" class="show-content" v-model="phone"/> <view class="copy-btn copy-name"  @click="copyContext(phone)">复制手机</view>
				</view>
				<view class="show-address">
				<textarea value="aaaaaaaa" v-model="address" class="show-content"/> <view class="copy-btn copy-name"  @click="copyContext(address)">复制地址</view>
				</view>
				<view class="big-btn">		<!--大按钮-->
					<button type="primary" class="btn-all" @click="copyContext(0)">全复制</button>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyWord:'星驰',
				getName:'',
				phone:'',
				address:''
				
			}
		},
		onLoad() {

		},
		methods: {
			copyContext(text){
				if(text){
					uni.setClipboardData({
						data:text
					})
				}else if(text === 0){
					var str = this.getName + ',' + this.phone + ',' + this.address;
					uni.setClipboardData({
						data:str
					})
				}
			},
			getInfo(keyWord){
				let _this = this;
				var isLoading = true;
				if(isLoading == true && _this.keyWord != ''){
					uni.showLoading({
						title:'查询中'
					})
					uni.request({
						url:'https://zhu.zhushang.net/Zhu/getAllDataByZiHao',
						data:{
							zi_hao:keyWord
						},
						success(res) {
							uni.hideLoading();
							if(!res.data.zhushang_user_info){
								uni.showModal({
									content:'未查询到信息',
									showCancel:false
								})
							}else{
								_this.getName = res.data.zhushang_user_info[0].user_name;
								_this.phone = res.data.zhushang_user_info[0].user_phone;
								_this.address = res.data.zhushang_user_info[0].id_card_address;
							}
						}
					})
				}
				
			}
		}
	}
</script>

<style lang="scss">
	input{
		height: 65rpx;
	}
	.content{
		width: 100vw;
		min-height: 100vh;
		box-sizing: border-box;
		padding: 50rpx 0;
		background:url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2085416026,1186179772&fm=26&gp=0.jpg) no-repeat;
		background-size: 100% 100%;
		.container{
			width: 530rpx;
			margin:auto;
			.search-box{
				flex-wrap: nowrap;
				font-size: 25rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background: #F5E9E9;
				border-radius: 15rpx;
				box-sizing: border-box;
				padding: 15rpx 25rpx;
				.info-input{
					border: 1px solid #979797;
					border-radius: 10rpx;
				}
				text{
					font-size: 28rpx;
					color: #443D3D;
					white-space: nowrap;
				}
				.go-search{
					background: #12E5E8;
					width: 70rpx;
					height: 70rpx;
					line-height: 70rpx;
					border-radius: 15rpx;
					display: table-cell;
					vertical-align: middle;
					// padding: 10rpx;
					color: #272424 ;
					text-align: center;
					font-size: 28rpx;
				}
				.go-search:active{
					color: #999999;
					background: linear-gradient(to bottom,#12E5E8,#076f70);
				}
			}
			.show-box{
				margin-top: 20rpx;
				background: #F5E9E9;
				border-radius: 15rpx;
				box-sizing: border-box;
				padding: 40rpx 25rpx 150rpx 25rpx;
				>view{
					margin-top: 30rpx;
					display: flex;
					justify-content: space-between;
					align-items:center;
					.copy-btn{
						font-size: 25rpx;
						color: #FFFFFF;
						background: #008EF6;
						border-radius: 15rpx;
						padding: 15rpx 10rpx;
					}
					.copy-btn:active{
						background: linear-gradient(to bottom,#008EF6,#095a95);
						color: #999999;
					}
					
					input{
						height: 65rpx;
						width: 70%;
						border: 1px solid #979797;
						border-radius: 10rpx;
						box-sizing: border-box;
						padding: 8rpx 15rpx;
						color: #888880;
						font-size: 25rpx;
						vertical-align: middle;
					}
				}
				.big-btn{
					width: 100%;
					button{
						width: 100%;
						background: #007AFF;
						text-align: center;
					}
				}
				.show-address{
					align-items: flex-end;
					
					textarea{
						font-size: 25rpx;
						color:#888880;
						height: 160rpx;
						width: 335rpx;
						border: 1px solid #979797;
						border-radius: 10rpx;
					}
				}
			}
		}
	}
</style>
