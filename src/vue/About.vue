<template>
	<div class="page-container">
		<Index :src="indexImg" title="About" :character="indexCharaImg" :click="clickCharacter"></Index>
		<div class="discription">
			<Markdown v-if="locale === 'en'">
Goodnightdream is an ansemble-cast role playing game to make people’s “dreams” come true<br>
<br>
Every single decision you take may change endings<br>
<br>
It is ok if you retry over and over again to make it happen<br>
or, of course, it is fine to give up chasing dreams<br>
<br>
BUT, please do your best if you would like to make your “dream” come true<br>
<br>
This game consists of a normal RPG section (as you control the charactor to move and enjoy talking)<br>
and a battle section which is like a music video game and a shooting game are combined<br>
Use the power of music to cure people’s worries and to cheer them up<br>
<br>
(tips; You can choose fighting styles. Who are not familiar with music video games can solve their worries in RPG ways, and vice versa. Don’t worry if you are not good at music games)
			</Markdown>
			<Markdown v-if="locale === 'jp'">
GoodNightDream は人々の “ユメ” を叶える群像劇風RPGです<br>
この世界ではあなたの取る全ての行動が結末を変え得る力を持っています<br>
<br>
夢を叶えるために, 諦めずに何度も挑戦するのも良いでしょう<br>
もちろん, 諦めて匙を投げても誰にも責めることはできません<br>
<br>
ただし, あなたが"ユメ"を叶えたければ, 常に最善を尽くすことをお勧めします<br>
<hr>
GoodNightDream はRPGと音楽ゲームの要素を含んでいます<br>
<br>
キャラクターを操作して旅をし<br>
音楽ゲームのような戦闘を介し<br>
<br>
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
					jp: new ModalMessage(`info`, `はは、細かいところまで確認するのはRPGの醍醐味だからね`, ``, style),
					en: new ModalMessage(`info`, `Hahha, checking everything carefully is really important in RPG`, ``, style)
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
