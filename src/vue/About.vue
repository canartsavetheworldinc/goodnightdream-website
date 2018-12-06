<template>
	<div class="page-container">
		<Index :src="indexImg" title="About"></Index>
		<div class="discription">
			<Markdown v-if="locale === 'en'">
Goodnightdream is an ansemble-cast role playing game to make people’s “dreams” come true<br>
every single action you choose may change endings<br>
it is ok if you try over and over again to make this happen<br>
of course it is fine if you dont do so<br>
<hr>
BUT, please do your best if you would like to make your “dream” come true<br>
as you are said in your life<br>
<hr>
This game consists of a normal RPG section (as you control the charactor to move and enjoy talking)<br>
and a battle section which is like a music video game and a shooting game are combined<br>
use the power of music to cure people’s worries and to cheer them up
			</Markdown>
			<Markdown v-if="locale === 'jp'">
Goodnightdream は人々の"ユメ"を叶える群像劇RPGです<br>
あなたのとる全ての行動が結末を変えうる力を持っています<br>
諦めずに何度も挑戦するのもいいでしょう<br>
もちろん、諦めて投げ出してしまうのも自由です<br>
<hr>
ただし、"ユメ"を叶えたければ常に最善を尽くすことをお勧めします<br>
あなたがいつも言われているように<br>
<hr>
このゲームはRPGと音ゲーの要素を含んでいます<br>
キャラクターを操作して旅をし、音ゲーのような戦闘を介して、音楽の力で人々の夢を叶える後押しをしましょう
			</Markdown>
		</div>
	</div>
</template>

<script>
	const Index = require("./components/Index.vue")
	const Markdown = require("./components/Markdown.vue")

	module.exports = {
		components: {
			Index,
			Markdown
		},
		data() {
			return {
				indexImg: require("../img/top_center.png")
			}
		},
		methods: {
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
</style>
