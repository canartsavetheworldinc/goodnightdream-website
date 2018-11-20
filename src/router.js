const Vue = require("vue/dist/vue.esm.js").default
const VueRouter = require("vue-router").default

Vue.use(VueRouter)

const routes = [
	{ path: "/", component: require("./vue/Root.vue") },
	{ path: "/twitter", component: require("./vue/Root.vue") },
	{ path: "/story", component: require("./vue/Root.vue") },
	{ path: "/demo", component: require("./vue/Root.vue") },
	{ path: "*", component: require("./vue/NotFound.vue") }
]

module.exports = new VueRouter({
	mode: "history",
	routes
})
