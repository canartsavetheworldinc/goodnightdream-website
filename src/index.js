const Vue = require("vue/dist/vue.esm.js").default

const store = require("./store.js")
const router = require("./router.js")

const Root = require("./vue/Root.vue")

new Vue({
	el: "#root",
	render: h => h(Root),
	store,
	router
})
