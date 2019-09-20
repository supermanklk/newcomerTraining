import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
		giftWrap:[
			{str:'aaa'}
		]
	},
	mutations:{
		addMygift(state,nItem){
			state.giftWrap.push()
		}
	}
})
export default store