const Vue = require("vue/dist/vue.esm.js").default
const Vuex = require("vuex")

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		locale: "jp"
	},
	mutations: {
	},
	getters: {
	},
	actions: {
	}
})

module.exports = store
