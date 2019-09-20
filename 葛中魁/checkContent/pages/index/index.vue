<template>
	<view class="content">
		<button type="primary" class="check-all" @click="check(true)">全选</button>
		<button type="primary" @click="reverseCheck()">反选</button>
		<button type="primary" @click="check(false)">全不选</button>
		<view class="check-list">
			<view class="list-item" :class="item.checked == true? 'list-item check-item':'list-item'" v-for="(item,index) in itemList"
			 v-text="item.title" :key="index" @click="checkHandle(index)">
			</view>
		</view>
		<navigator url="../picked/picked"> ppp</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList: [{
						title: '第一项',
						checked: false
					},
					{
						title: '第二项',
						checked: false
					},
					{
						title: '第三项',
						checked: true
					},
					{
						title: '第四项',
						checked: false
					},
					{
						title: '第五项',
						checked: false
					},
					{
						title: '第六项',
						checked: false
					},
					{
						title: '第七项',
						checked: false
					},
					{
						title: '第八项',
						checked: false
					},
					{
						title: '第九项',
						checked: false
					},
					{
						title: '第十项',
						checked: false
					},
					{
						title: '第十一项',
						checked: false
					},
					{
						title: '第十二项',
						checked: false
					},
					{
						title: '第十三项',
						checked: false
					},
					{
						title: '第十二项',
						checked: false
					},
					{
						title: '第十三项',
						checked: false
					},
					{
						title: '第十二项',
						checked: false
					},
					{
						title: '第十三项',
						checked: false
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			checkHandle(index) {
				if (this.itemList[index].checked === true) {
					this.itemList[index].checked = false;
				} else {
					this.itemList[index].checked = true;
				}

			},
			check(bool) {
				for (let item of this.itemList) {
					item.checked = bool;
				}
			},
			reverseCheck() {
				for (let item of this.itemList) {
					if (item.checked === true) {
						item.checked = false;
					} else if (item.checked === false) {
						item.checked = true;
					}
				}
			}
		}
	}
</script>

<style>
	.content {
		box-sizing: border-box;
		padding: 0 25rpx;
		width: 100%;
		text-align: center;
	}

	button {
		margin-top: 15rpx;
		background: rgb(248, 248, 248) !important;
		border: 1px solid rgb(233, 233, 233);
		color: rgb(39, 39, 39) !important;
		font-size: 35rpx;
	}

	.check-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.list-item {
		flex: 0 0 30%;
		font-size: 25rpx;
		width: 25%;
		padding: 15rpx;
		background: #FFFFFF;
		border: 1px solid rgb(233, 233, 233);
		margin: 10rpx 0;
		color: rgb(129, 129, 129);
		position: relative;
		box-sizing: border-box;
	}

	.check-item {
		border: 1px solid rgb(89, 211, 185);
		color: rgb(89, 211, 185);
		background: rgb(242, 255, 249);
	}

	.check-item:after {
		width: 35rpx;
		height: 35rpx;
		display: inline-block;
		position: absolute;
		content: '';
		// content: url(../../static/get.png);
		background: url(../../static/get.png) no-repeat;
		background-size: 100%;
		box-sizing: border-box;
		bottom: 0;
		right: 0;
		/* background: linear-gradient(135deg,rgb(242,255,249) 50%,rgb(0,192,132) 50%); */
	}
</style>
