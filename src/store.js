const Vue = require("vue/dist/vue.esm.js").default
const Vuex = require("vuex")

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		locale: ""
	},
	mutations: {
		changeLocale(state, lang) {
			// console.log(state, lang)
			state.locale = lang
		}
	},
	getters: {
		getLocale(state) {
			// console.log(state)
			return state.locale || getQuery().lang || "jp"
		}
	},
	actions: {
		changeLocale(store, lang) {
			// console.log(store, lang)
			store.commit("changeLocale", lang)
			window.location.href = `?lang=${ lang }${ window.location.hash }`
		}
	}
})

function getQuery() {
	if(window.location.search === "")
		return {}
    const variables = window.location.search.split("?")[1].split("&")
    const obj = {}
    variables.forEach(function(v, i) {
        const variable = v.split("=")
        obj[variable[0]] = variable[1]
    })
    return obj
}

module.exports = store
