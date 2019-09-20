<template>
	<view class="foot-wrap" >
		<view class="foot-nav" v-for="item in footNav">
			<image :src="item.src" mode="scaleToFill"></image>
			<text>{{item.title}}</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:'FootView',
		data() {
			return {
				footNav:[
					{src:'',title:'牛人',url:'../../index/index'},
					{src:'',title:'消息',url:'../../index/index'},
					{src:'',title:'我的',url:'../../index/index'}
				]
			};
		}
	}
</script>

<style>
.foot-wrap{
	width: 100%;
	display: flex;
	justify-content: space-around;
}
</style>
