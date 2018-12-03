const Vue = require("vue/dist/vue.esm.js").default
const Vuex = require("vuex")

Vue.use(Vuex)

const ModalMessage = require("./modules/ModalMessage.js")

const store = new Vuex.Store({
	state: {
		locale: "",
		showModal: false,
		modalMessage: new ModalMessage(),
		logoClickCount: 0,
		nightmareState: false
	},
	mutations: {
		changeLocale(state, lang) {
			// console.log(state, lang)
			state.locale = lang
		},
		changeModalMessage(state, message) {
			if(message === null)
				message = new ModalMessage()
			if(typeof message === "string")
				message = new ModalMessage("", message, "")
			if(typeof message !== "object")
				throw new Error(`modal-message is invalid`)
			state.modalMessage = new ModalMessage(message)
		},
		clickLogo(state, val) {
			if(!isNaN(+val) && typeof +val === "number")
				state.logoClickCount = +val
			else
				state.logoClickCount++
		},
		setNightmareState(state, val) {
			state.nightmareState = !!val
		}
	},
	getters: {
		getLocale(state) {
			// console.log(`getLocale: ${ getQuery().lang }`)
			return state.locale || getQuery().lang || "jp"
		},
		showModal(state) {
			return !!state.modalMessage.body
		},
		modalMessage(state) {
			return state.modalMessage.object
		},
		logoClickCount(state) {
			return state.logoClickCount
		},
		getNightmareState(state) {
			return state.nightmareState
		}
	},
	actions: {
		changeLocale(store, lang) {
			// console.log(store, lang)
			store.commit("changeLocale", lang)
			window.location.href = `?lang=${ lang }${ window.location.hash }`
		},
		changeModalMessage(store, message) {
			store.commit("changeModalMessage", message)
		},
		clickLogo(store, val) {
			store.commit("clickLogo", val)
		},
		setNightmareState(store, val) {
			store.commit("setNightmareState", val)
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
