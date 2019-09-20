<template>
	<view>
		<!-- <picker-view indicator-style="height: 50px;" :value="value" @change="bindChange"> -->
		<picker-view  :value="value" @change="bindChange">
			<picker-view-column>
				<view v-for="(item,index) in nameList" v-text="item"></view>
			</picker-view-column>
			<picker-view-column>
				<view v-for="(item,index) in ageList" v-text="item"></view>
			</picker-view-column>
			<picker-view-column>
				<view v-for="(item,index) in sexList" v-text="item"></view>
			</picker-view-column>
		</picker-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:[ , , ],
				nameList:['啊','吧','从','的','额','f','个'],
				ageList:[1,2,3,4,5,6,7,8,9],
				sexList:['man','man','man','man','woman']
			}
		},
		methods: {
			bindChange(e){
				console.log(e);
			}
		}
	}
</script>

<style>

</style>
