<template>
	<div class="page-container">
		<Index :src="indexImg" title="about"></Index>
		<div class="discription">
			<Markdown>
Goodnightdream は人々の"ユメ"を叶える群像劇RPGです  
あなたのとる全ての行動が結末を変えうる力を持っています  
諦めずに何度も挑戦するのもいいでしょう  
もちろん、諦めて投げ出してしまうのも自由です

ただし、"ユメ"を叶えたければ常に最善を尽くすことをお勧めします  
あなたがいつも言われているように

このゲームはRPGと音ゲーの要素を含んでいます  
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
	}
</style>
