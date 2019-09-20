<template>
	<view class="content">
		<view class="nav-bar">
			<view 
			v-for="(item,index) in headData" 
			@click="navTo(index,item)"
			:class="index == navIndex?'isNav onNav':'isNav'">
				<text>{{item.title}}</text>
				<view v-show="item.msg" class="icon-msg">
					
				</view>
			</view>
		</view>
		<view class="icon-bar">
			<image v-for="(item,index) in headIcon" :src="item.src" mode="scaleToFill"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:'HeadView',
		data() {
			return {
				navIndex:0,
				headData:[
					{title:'聊天',msg:false,url:'../../pages/index/index'},
					{title:'互动',msg:true,url:'../../pages/index/index'}
				],
				headIcon:[
					{src:'../static/scan.png'},
					{src:'../static/ring.png'}
				]
			};
		},
		methods:{
			navTo(index,item){
				this.navIndex = index;
				item.msg = false;
			}
		}
	}
</script>

<style scoped>
   .content{
	   background: #38B7AF;
	   box-sizing: border-box;
	   padding:10rpx  25rpx;
	   display: flex;
	   justify-content: space-between;
   }
   .nav-bar{
	   font-size: 30rpx;
	   display: flex;
	   align-items: center;
	   color:#98E6E2;
   }
   .onNav{
	   color: #FFFFFF;
	   font-size: 40rpx;
	   vertical-align: middle;
   }
   image{
	   width: 35rpx;
	   height: 35rpx;
   }
   text{
	   margin-left: 20rpx;
   }
  .isNav{
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
  .icon-bar image{
	  margin-right: 20rpx;
  }
</style>
