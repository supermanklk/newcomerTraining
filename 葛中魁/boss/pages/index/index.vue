<template>
	<view class="content">
		<view class="head-com com">
			<HeadView></HeadView>
		</view>
		<view class="main-box">
			<view class="search-box">
				<view class="input-box">
					<icon type="search" size="16"></icon>
					<input type="text" value="" placeholder="搜索 姓名/就职公司/聊天记录"/>
				</view>
				<picker mode="selector" :range="pickList">
					筛选
				</picker>
			</view>
			<view class="msg-head bottom-line">
				<view class="msg-title">
					联系人
				</view>
				<view class="unRead-count">
					<text>未读消息·</text>
					<text>111</text>
				</view>
			</view>
			
			<view class="double-wrap">
				<view class="double-item bottom-line" v-for="item in doubleList">
					<view class="img-wrap">
						<image class="img-boss" :src="item.img1" mode="scaleToFill"></image>
						<image class="img-boss" :src="item.img2" mode="scaleToFill"></image>
					</view>
					<view class="double-content">
						<view class="top-list">
							<view class="titled">
								{{item.member1}},{{item.member2}}
							</view>
							<view class="top-tips">
								<text class="border-round">同事协作</text>
								<text>{{item.time}}</text>
							</view>
						</view>
						<view class="down-msg">
							这是我和{{item.boss}}的聊天记录
						</view>
					</view>
				</view>
			</view>
			
			<view class="double-wrap">
				<view class="double-item bottom-line">
					<view class="img-wrap my-wrap">
						<image class="img-bosser" src="../../static/eyes.png" mode="scaleToFill"></image>
						<view class="icon-msg">
							
						</view>
					</view>
					<view class="double-content">
						<view class="top-list">
							<view class="titled">
								吕斌  产看了您
							</view>
							<view class="top-tips">
								
								<text>09:26</text>
							</view>
						</view>
						<view class="down-msg">
							21位牛人产看
						</view>
					</view>
				</view>
			</view>
			
			<view class="chart-list bottom-line" v-for="item in chartList">
				<view class="boss-img">     <!--头像-->
					<image class="char-img" src="../../static/eyes.png" mode="scaleToFill"></image>
					<view v-if="!item.read" class="img-tips">
						1
					</view>
				</view>
				<view class="boss-info">             <!--文字信息-->
					<view class="info-top">         <!--上放信息-->
						<view class="">      <!--昵称-->
							<text class="info-title" v-text="item.name"> </text>
							<text class="word-tip" v-text="item.tips"> </text>
						</view>
						<view class="time">     <!--时间-->
							{{item.time}}
						</view>
					</view>
					<view class="msg">          <!--下方信息-->
						<text v-text="item.msg"></text>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	
	import HeadView from '@/components/HeadView'
	export default {
		data() {
			return {
			    pickInfo:'',
				pickList:['pick1','pick2','pick3','pick4'],
				doubleList:[
					{member1:'张先生',member2:'李先生',boss:'孙春囍',anTips:true,time:'09:26',img1:'../../static/img1.png',img2:'../../static/img2.png'},
					{member1:'张先生',member2:'蔡女士',boss:'孙春囍',anTips:true,time:'09:26',img1:'../../static/img2.png',img2:'../../static/img1.png'},
				],
				chartList:[
					{name:'彦吕颖',tips:'web前端',time:'09:06',msg:'你好',read:false},
					{name:'李冰',tips:'web前端',time:'09:01',msg:'你好',read:true},
					{name:'王亲生',tips:'web前端',time:'08:55',msg:'你好',read:false},
					{name:'李婷婷',tips:'web前端',time:'08:32',msg:'你好',read:true},
					{name:'张三',tips:'web前端',time:'08:09',msg:'你好',read:true},
					{name:'李某人',tips:'web前端',time:'0:08',msg:'你好',read:true},
				]
			}
		},
		onLoad() {

		},
		methods: {

		},
		components:{
			
			HeadView
		}
	}
</script>

<style scoped>
	@import url("../../static/css/main.css");
	@import url("../../static/css/list.css");
	.double-item{
		display: flex;
		align-items: stretch;
		box-sizing: border-box;
		padding: 20rpx 0;
		position: relative;
	}
	.icon-msg{
		width: 10rpx;
		height: 10rpx;
		background: red;
		border-radius: 50%;
		position:absolute;
		top: 0;
		right: 0;
	}
	.img-wrap{
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #F3F1F4;
		border-radius: 15rpx;
		box-sizing: border-box;
		padding: 0 5rpx;
		margin-right: 30rpx;
	}
	.img-boss{
		width: 30rpx;
		height: 30rpx;
	}
	.my-wrap{
		padding: 0;
		background: none;
		position: relative;
	}
	.titled{
		color: #252426;
		font-size: 30rpx;
    }
	.eyesimg{
		width: 60rpx;
		max-width: 100%;
		height: 100%;
		border-radius: 20rpx;
	}
	.double-content{
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
	.top-list{
		/* position: relative; */
	}
	.img-bosser{
		width: 65rpx;
		height: 65rpx;
		border-radius: 50%;
	}
	.down-msg{
		color: #808080;
		font-size:20rpx;font-size:25rpx;
	}
	.top-tips{
		position: absolute;
		top: 25rpx;
		right: 0;
		font-size:20rpx;
		color: #808080;
	}
	.border-round{
		border: 1rpx solid #F4F2F4;
		margin-right: 5rpx;
	}
	.eye-icon{
		width: 20%;
		position: relative;
	}
	.foot-com{
		
	}
</style>
