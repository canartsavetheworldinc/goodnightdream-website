<template>
	<div class="page-container">
		<Index :src="indexImg" title="Demo" :character="indexCharaImg" :clickmoon="clickMoon" :clickcharacter="clickCharacter"></Index>
		<div class="discription">
			<Markdown v-if="locale === 'en'">
under development<br>
please wait<br>
<br>
demo coming this spring
			</Markdown>
			<Markdown v-if="locale === 'jp'">
開発中です<br>
しばらくお待ちください<br>
(デモ版公開予定 2019年1月末日)
			</Markdown>
		</div>
	</div>
</template>

<script>
	const Index = require("./components/Index.vue")
	const Markdown = require("./components/Markdown.vue")
	const ModalMessage = require("../modules/ModalMessage.js")

	module.exports = {
		components: {
			Index,
			Markdown
		},
		data() {
			return {
				indexImg: require("../img/top_right.png"),
				indexCharaImg: require("../img/programming_mouse-demo.png")
			}
		},
		methods: {
			clickMoon() {
				const style = {
					container: {
						color: "#333",
						backgroundColor: "#ddd"
					},
					header: {
						color: "#ddd",
						backgroundColor: "#333"
					}
				}
				const message = {
					jp: new ModalMessage(`月齢`, `有明月`, ``, style),
					en: new ModalMessage(`Lunar phase`, `有明月`, ``, style)
				}
				this.$store.dispatch("changeModalMessage", message[this.locale])
			},
			clickCharacter() {
				const style = {
					container: {
						color: "#333",
						backgroundColor: "#fff462"
					},
					header: {
						color: "#333",
						backgroundColor: "#bb2"
					}
				}
				const message = {
					jp: new ModalMessage(`message #fff462`, `ごめんね、まだ開発中です`, ``, style),
					en: new ModalMessage(`message #fff462`, `Sorry, now we are developing hardly`, ``, style)
				}
				this.$store.dispatch("changeModalMessage", message[this.locale])
			}
		},
		computed: {
			locale() {
				// console.log(this.$store.getters.getLocale)
				return this.$store.getters.getLocale
			}
		}
	}
</script>

<style scoped>
	.page-container {
		margin: 0 10%;
	}
	.discription {
		margin: 15px 0 35px 0;
		text-align: center;
	}
	@media(max-width:768px) {
		.page-container {
			margin: 0 17px;
		}
	}
</style>
