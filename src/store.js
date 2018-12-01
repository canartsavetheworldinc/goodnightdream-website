const Vue = require("vue/dist/vue.esm.js").default
const Vuex = require("vuex")

Vue.use(Vuex)

class ModalMessage {
	constructor(header = "", body = "", footer = "") {
		if(typeof header === "object") {
			const obj = header
			header = obj.header || ""
			body = obj.body || ""
			footer = obj.footer || ""
		}
		this.header = header
		this.body = body
		this.footer = footer
	}
	get object() {
		return {
			header: this.header,
			body: this.body,
			footer: this.footer
		}
	}
}

const store = new Vuex.Store({
	state: {
		locale: "",
		showModal: false,
		modalMessage: new ModalMessage()
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
		}
	},
	getters: {
		getLocale(state) {
			// console.log(state)
			return state.locale || getQuery().lang || "jp"
		},
		showModal(state) {
			return !!state.modalMessage.body
		},
		modalMessage(state) {
			return state.modalMessage.object
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
