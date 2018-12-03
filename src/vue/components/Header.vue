<template>
	<div class="container">
		<div class="logo" @click="clickLogo()">
			<router-link to="/">
				<img v-if="!nightmare" src="../../img/logo_tsp.png" alt="GoodNightDream" />
				<img v-if="nightmare" src="../../img/nightmare_tsp.png" alt="GoodNightMare" />
			</router-link>
		</div>
		<div class="locale"><a href="#" @click="locale(`en`)">EN</a> / <a href="#" @click="locale('jp')">JP</a></div>
	</div>
</template>

<script>
	const ModalMessage = require("../../modules/ModalMessage.js")

	module.exports = {
		data() {
			return {
				path: this.$route.path,
				prankMsg: {}
			}
		},
		watch: {
			$route() {
				this.path = this.$route.path
			}
		},
		methods: {
			locale(lang) {
				// console.log(lang)
				this.$store.dispatch("changeLocale", lang)
			},
			clickLogo() {
				// if(this.path === "/" || this.nightmare)
				// 	this.$store.dispatch("clickLogo")
				// else
				// 	this.$store.dispatch("clickLogo", 0)
				// console.log(this.path, this.clickCount)
				if(this.path !== "/")
					return
				this.$store.dispatch("clickLogo")
				switch(this.clickCount) {
					case 1:
						this.prankMsg = {
							jp: new ModalMessage(``, ``, ``),
							en: new ModalMessage(``, ``, ``)
						}
						break
					case 2:
						this.prankMsg = {
							jp: new ModalMessage(`info`, `なに？そんなにタイトルがきになる？`, ``),
							en: new ModalMessage(`info`, `what? what do you expect to see?`, ``)
						}
						break
					case 3:
						this.$store.dispatch("setNightmareState", true)
						this.prankMsg = {
							jp: new ModalMessage(`info`, `あはは、じゃあこんなのはどうさ？`, ``),
							en: new ModalMessage(`info`, `hahha, so… how about this?`, ``)
						}
						break
					case 4:
						this.prankMsg = {
							jp: new ModalMessage(`info`, `君が余計なことをするからだぜ`, ``),
							en: new ModalMessage(`info`, `cuz you did something needless`, ``)
						}
						break
					case 5:
						this.prankMsg = {
							jp: new ModalMessage(`info`, `なに？戻したいの？`, ``),
							en: new ModalMessage(`info`, `what? do you want to recover this?`, ``)
						}
						break
					case 6:
						this.prankMsg = {
							jp: new ModalMessage(`info`, `残念、それは無理な相談だ`, ``),
							en: new ModalMessage(`info`, `nope, its not what you can.`, ``)
						}
						break
					default:
						this.prankMsg = {}
				}
				// console.log(this.prankMsg, this.getLang)
				this.$store.dispatch("changeModalMessage", this.prankMsg[this.getLang] || null)
			},
			showModal(message) {
				this.$store.dispatch("changeModalMessage", message)
			}
		},
		computed: {
			clickCount() {
				return this.$store.getters.logoClickCount
			},
			getLang() {
				return this.$store.getters.getLocale
			},
			nightmare() {
				return this.$store.getters.getNightmareState
			}
		}
	}
</script>

<style scoped>
	a {
		color: #ddd;
	}
	.container {
		height: 300px;
		min-height: 300px;
		margin: -50px 0 -60px 0;
		display: flex;
		justify-content: center;
	}
	.logo {
		height: 100%;
	}
	.logo img {
		height: 100%;
	}
	.locale {
		position: absolute;
		top: 15px;
		right: 15px;
	}
</style>
