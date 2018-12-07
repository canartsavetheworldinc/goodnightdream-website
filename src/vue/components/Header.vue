<template>
	<div class="container">
		<div class="logo" @click="clickLogo()">
			<router-link to="/">
				<img v-if="nightmare === `flickering`" src="../../img/logo_flickering_tsp.gif" alt="GoodNightDream" />
				<img v-else-if="nightmare === `flickering-2`" src="../../img/logo_flickering_2_tsp.gif" alt="GoodNightDream" />
				<img v-else-if="nightmare === `nightmare`" src="../../img/nightmare_tsp.png" alt="GoodNightMare" />
				<img v-else src="../../img/logo_tsp.png" alt="GoodNightDream" />
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
				prankMsg: {},
				prankStyle: {}
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
				if(lang === this.getLang) {
					this.prankStyle = {
						container: {
							backgroundColor: "#e45e32"
						},
						header: {
							backgroundColor: "#931"
						}
					}
					const message = {
						jp: new ModalMessage(`info`, `すでに日本語だろ、違う？`, ``, this.prankStyle),
						en: new ModalMessage(`info`, `This is in English, isn’t it?`, ``, this.prankStyle)
					}
					this.$store.dispatch("changeModalMessage", message[lang])
				} else {
					this.$store.dispatch("changeLocale", lang)
				}
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
						// this.$store.dispatch("setNightmareState", "flickering")
						this.prankStyle = {
							container: {
								backgroundColor: "#e45e32"
							},
							header: {
								backgroundColor: "#931"
							}
						}
						this.prankMsg = {
							jp: new ModalMessage(`info`, `タイトルに興味があるのかい？`, ``, this.prankStyle),
							en: new ModalMessage(`info`, `Are you interested in this title?`, ``, this.prankStyle)
						}
						break
					case 2:
						this.$store.dispatch("setNightmareState", "flickering-2")
						this.prankStyle = {
							container: {
								backgroundColor: "#e45e32"
							},
							header: {
								backgroundColor: "#931"
							}
						}
						this.prankMsg = {
							jp: new ModalMessage(`info`, `あんまり余計なことをしない方がいいよ`, ``, this.prankStyle),
							en: new ModalMessage(`info`, `Don’t do anything useless so much`, ``, this.prankStyle)
						}
						break
					case 3:
						this.$store.dispatch("setNightmareState", "flickering")
						this.prankMsg = {
							jp: new ModalMessage(``, ``, ``),
							en: new ModalMessage(``, ``, ``)
						}
						break
					case 4:
						this.$store.dispatch("setNightmareState", "nightmare")
				// 		this.prankMsg = {
					// 			jp: new ModalMessage(`info`, `君が余計なことをするからだぜ`, ``),
				// 			en: new ModalMessage(`info`, `cuz you did something needless`, ``)
				// 		}
						break
				// 	case 5:
				// 		this.prankMsg = {
					// 			jp: new ModalMessage(`info`, `なに？戻したいの？`, ``),
				// 			en: new ModalMessage(`info`, `what? do you want to recover this?`, ``)
				// 		}
				// 		break
				// 	case 6:
				// 		this.prankMsg = {
					// 			jp: new ModalMessage(`info`, `残念、それは無理な相談だ`, ``),
				// 			en: new ModalMessage(`info`, `nope, its not what you can.`, ``)
				// 		}
				// 		break
					case 7:
						this.prankStyle = {
							container: {
								color: "#333",
								backgroundColor: "#fff462"
							},
							header: {
								color: "#333",
								backgroundColor: "#bb2"
							}
						}
						this.prankMsg = {
							jp: new ModalMessage(`info`, `タイトルをクリックしてください`, ``, this.prankStyle),
							en: new ModalMessage(`info`, `Click the title`, ``, this.prankStyle)
						}
						break
					case 8:
						this.$store.dispatch("setNightmareState", "")
						this.prankMsg = {
							jp: new ModalMessage(``, ``, ``),
							en: new ModalMessage(``, ``, ``)
						}
						break
					default:
						this.prankMsg = {}
				}
				// console.log(this.prankMsg, this.getLang)
				this.$store.dispatch("changeModalMessage", this.prankMsg[this.getLang] || null)
			}
		},
		computed: {
			clickCount() {
				document.activeElement.blur()
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
		height: 200px;
		min-height: 200px;
		/* margin: -50px 0 -60px 0; */
		display: flex;
		justify-content: center;
	}
	.logo {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.logo img {
		height: 180px;
		width: 855px;
		object-fit: cover;
		cursor: pointer;
		transition: filter .3s;
	}
	.logo img:hover {
		filter: brightness(70%);
	}
	.locale {
		position: absolute;
		top: 15px;
		right: 15px;
	}
	@media(max-width:768px) {
		.container {
			height: 80px;
			min-height: 80px;
			margin-top: 20px;
		}
		.logo img {
			height: 88.35px;
			width: 320px;
		}
		.logo img:hover {
			filter: none;
		}
	}
</style>
