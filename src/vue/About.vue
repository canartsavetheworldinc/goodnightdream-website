<template>
	<div class="page-container">
		<Index :src="indexImg" title="About" :character="indexCharaImg" :clickmoon="clickMoon" :clickcharacter="clickCharacter"></Index>
		<div class="discription">
			<Markdown v-if="locale === 'en'">
<br>
Goodnightdream is an ansemble-cast role playing game<br>
to make people’s “dreams” come true<br>
<br>
Every single decision you take may change endings<br>
<hr>
It is ok if you retry over and over again to make it happen<br>
or, of course, it is fine to give up chasing dreams<br>
<hr>
But, please do your best<br>
if you would like to make your “dream” come true<br>
<hr>
-----------------　☾　-----------------<br>
<hr>
This game consists of a normal RPG section<br>
(as you control the charactor to move and enjoy talking)<br>
and a battle section which is like a music video game and a shooting game are combined<br>
<hr>
Use the power of music to cure people’s worries and to cheer them up<br>
<hr>
(tips; You can choose fighting styles. Who are not familiar with music video games<br>
can solve their worries in RPG ways, and vice versa.<br>
Don’t worry if you are not good at music games)
			</Markdown>
			<Markdown v-if="locale === 'jp'">
<br>
GoodNightDream は人々の “ユメ” を叶える群像劇風RPGです<br>
<br>
この世界ではあなたの取る全ての行動が結末を変え得る力を持っています<br>
<hr>
夢を叶えるために, 諦めずに何度も挑戦するのも良いでしょう<br>
もちろん, 諦めて匙を投げても誰にも責めることはできません<br>
<hr>
ただし, あなたが"ユメ"を叶えたければ, 常に最善を尽くすことをお勧めします<br>
<hr>
-----------------　☾　-----------------<br>
<hr>
GoodNightDream はRPGと音楽ゲームの要素を含んでいます<br>
<hr>
キャラクターを操作して旅をし<br>
音楽ゲームのような戦闘を介し<br>
<hr>
音楽の力で人々の夢を叶える後押しをしましょう<br>
<br>
(ちなみに, 音ゲーやRPGの得手不得手によって戦い方を変えることが可能です. 音ゲーが苦手でも心配しないでね)
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
				indexImg: require("../img/top_center.png"),
				indexCharaImg: require("../img/tanno-about.png")
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
					jp: new ModalMessage(`月齢`, `幾望`, ``, style),
					en: new ModalMessage(`Lunar phase`, `幾望`, ``, style)
				}
				this.$store.dispatch("changeModalMessage", message[this.locale])
			},
			clickCharacter() {
				const style = {
					container: {
						backgroundColor: "#e45e32"
					},
					header: {
						backgroundColor: "#931"
					}
				}
				const message = {
					jp: new ModalMessage(`message #e45e32`, `はは、細かいところまで確認するのはRPGの醍醐味だからね`, ``, style),
					en: new ModalMessage(`message #e45e32`, `Hahha, checking everything carefully is really important in RPG`, ``, style)
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
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 10%;
	}
	.discription {
		width: 100%;
		text-align: center;
	}
	@media(max-width:768px) {
		.page-container {
			margin: 0 17px;
		}
	}
</style>
