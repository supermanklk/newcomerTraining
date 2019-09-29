<template>
	<view class="container">
		<view class="search-wrapper">
			<view class="search-container">
				<!-- <image src="../../static/search.png" mode="icon"></image> -->
				<image v-if="gUrl" :src="gUrl+ 'search.png'" mode="icon"></image>
				<input 
				type="text" 
				v-model="keyWord" 
				confirm-type="search" 
				@confirm="searchZihao()" 
				placeholder="请输入关键信息" 
				/>
			</view>
		</view>
		<view v-if="init" class="search-history">
			<view class="history-title">
				<text>历史搜索</text>
				<!-- <image src="../../static/delete.png" mode="" @click="clearHistory"></image> -->
				<image src="../../static/delete.png" mode="" @click="clearHistory"></image>
			</view>
			<view class="history-list">
				<view 
				class="history-item" 
				@click="searchZihao(item)" 
				v-for="(item, index) in historyList" 
				v-text="item" 
				:key="index">
				</view>
			</view>
		</view>
		<view 
		class="info-box" 
		v-for="(item,index) in showInfo" 
		:key="index">
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
				keyWord: '',
				accountInfo: [],
				showInfo:[],
				init:true,
				historyList:[],
				keyCount:[],
				gUrl:''
			}
		},
		methods: {
			searchZihao(item) {        
				this.accountInfo=[];	//初始化数据
				this.showInfo=[];		
				if(item){	//如果是点击历史记录进来的
					uni.showLoading({
						title: '查询中'
					})
					uni.request({
						url: 'http://pre.zhushang.net/Gzkdemo/getOrderInfo',
						data: {
							zihao: item
						},
						success: (res) => {
							this.init = false;
							uni.hideLoading();
							this.accountInfo = res.data[0];
						}
					})
					return 
				}else{	//搜索的字号
				
					uni.showLoading({
						title: '查询中'
					})
					uni.request({
						url: 'http://pre.zhushang.net/Gzkdemo/getOrderInfo',
						data: {
							zihao: this.keyWord
						},
						success: (res) => {
							console.log('请求成功 并且不重复');
							this.init = false;
							uni.hideLoading();
							console.log(res);
							if(res.data[0]){      			//请求的结果不为空
								this.accountInfo = res.data[0];
								if(this.historyList.includes(this.keyWord) == false){     //是否是新的字号 如果不是将不再写入本地缓存
									this.keyCount.push(this.keyWord);
									uni.setStorage({
										key:'historySearch',
										data:this.keyCount
									})
								}
							}else{
								uni.showModal({
									showCancel:false,
									content:'未找到您的字号'
								})
							}
						},
						fail(res) {
							uni.showModal({
								showCancel:false,
								content:'网络超时'
							})
						}
					})
				}
			},
			clearHistory(){
				uni.removeStorage({    //删除历史记录
					key:'historySearch',
					success:()=> {
						this.historyList = [];
					}
				})
			}
		},
		watch: {              //监听数据    
			accountInfo(val) {
				for (let i in val) {		//将请求的对象拆解称{title:'',context:''} 格式
					if (val[i] != "" && val[i] != null) {		//过滤空内容
						this.showInfo.push({
							title: i,
							context: val[i]
						})
					}
				}
				for (let p of this.showInfo) {		 //将对应的key改为汉字
					switch (p.title) {
						case 'id':
							p.title = "用户ID"
							break;
						case 'create_time':
							p.title = "创建时间"
							break;
						case 'account':
							p.title = "账户"
							break;
						case 'expire_date':
							p.title = "结束时间"
							break;
						case 'pay_money':
							p.title = "支付金额"
							break;
						case 'openid':
							p.title = "OPENID"
							break;
						case 'order_no':
							p.title = "排名"
							break;
						case 'name':
							p.title = "姓名"
							break;
						case 'package':
							p.title = "版本"
							break;
						case 'password':
							p.title = "密码"
							break;
						case 'type':
							p.title = "类型"
							break;
						case 'user_where':
							p.title = "级别"
							break;
						case 'phone':
							p.title = "手机"
							break;
						case 'zihao':
							p.title = "字号"
							break;
						default: "未知信息"
					}
				}
			}
		},
		onLoad() {
			uni.getStorage({		//获取有效搜索历史
				key:'historySearch',
				success:(res)=>{
					this.historyList = res.data;
				}
			})
			this.gUrl = global.url;
		}
	}
</script>

<style lang="scss">
	page {
		background: #EFEFF4;

		.container {
			font-family: PingFangSC-Regular;
			width: 100%;
			box-sizing: border-box;

			.search-wrapper {
				width: 100%;
				box-sizing: border-box;
				padding: 10rpx 20rpx;

				.search-container {
					display: flex;
					justify-content: center;
					align-items: center;
					box-sizing: border-box;
					padding: 5rpx 10rpx;
					background: #FFFFFF;
					border-radius: 50rpx;

					input {
						border: none;
						background: none;
						outline: none;
						font-size: 25rpx;
						font-size: 34rpx;
						white-space: pre-wrap;
						color: #888888;
					}

					image {
						width: 40rpx;
						height: 40rpx;
					}
				}
			}
			.search-history{
				width: 100%;
				box-sizing: border-box;
				padding: 30rpx 20rpx;
				background:#FFFFFF;
				border-top-left-radius: 20rpx;
				border-top-right-radius:20rpx;
				.history-title{
					display: flex;
					justify-content: space-between;
					align-items:center;
					font-size:30rpx;
					image{
						width: 35rpx;
						height: 35rpx;
					}
				}
				.history-list{
					padding: 25rpx 0rpx;
					display: flex;
					justify-content: flex-start;
					.history-item{
						margin-right: 20rpx;
						font-size:30rpx;
						line-height: 40rpx;
						padding: 10rpx 20rpx;
						background: #EFEFF4;
						border-radius: 40rpx;
						color: #555555;
					}
				}
			}
			
			.info-box {
				margin-top: 1rpx;
				margin-left: 0 !important;
				width: 100%;
				background: #FFFFFF;
				padding: 28rpx 71rpx 29rpx 34rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;

				text {
					width: 136rpx;
					font-size: 34rpx;
					color: #000000;
					text-align-last: justify;
					white-space: nowrap;
				}
				.show-info {
					text-align: right;
					margin-left: 59rpx;
					font-size: 34rpx;
					white-space: pre-wrap;
					color: #888888;
					line-height: 48rpx;
					word-break: break-all;
				}
			}
		}
	}
</style>
