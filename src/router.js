const Vue = require("vue/dist/vue.esm.js").default
const VueRouter = require("vue-router").default

Vue.use(VueRouter)

const routes = [
	{ path: "/", component: require("./vue/Top.vue") },
	// { path: "/twitter", component: require("./vue/Twitter.vue") },
	{ path: "/story", component: require("./vue/Story.vue") },
	{ path: "/demo", component: require("./vue/Demo.vue") },
	{ path: "/about", component: require("./vue/About.vue") },
	{ path: "*", component: require("./vue/NotFound.vue") }
]

module.exports = new VueRouter({
	mode: "hash",
	routes
})
