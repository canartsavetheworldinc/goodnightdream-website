<template>
	<div class="top-container">
		<div class="discription">
			<Markdown>
「おやすみなさい よい夢を」

とある理由で宿屋の管理を引き受けた主人公は 夢の中で宿泊客の悩みと夢に向き合っていく

悩みや希望を抱えて 人々は何を"ユメ"に見るのか

◾︎*.◾︎/◾︎の “ユメ” を叶える “夢物語” RPG
			</Markdown>
		</div>
		<div class="main-links">
			<MainLink :src="mainLinks.story" title="story" href="/story"></MainLink>
			<MainLink :src="mainLinks.about" title="about" href="/about"></MainLink>
			<MainLink :src="mainLinks.demo" title="demo" href="/demo"></MainLink>
		</div>
		<div class="main-links">
			<MainLink :src="mainLinks.twitter" title="twitter" href="/twitter"></MainLink>
		</div>
	</div>
</template>

<script>
	const MainLink = require("./components/MainLink.vue")
	const Markdown = require("./components/Markdown.vue")

	module.exports = {
		components: {
			MainLink,
			Markdown
		},
		data() {
			return {
				mainLinks: {
					story: require("../img/top_left.png"),
					about: require("../img/top_center.png"),
					demo: require("../img/top_right.png"),
					twitter: require("../img/twitter_logo.png")
				}
			}
		},
		methods: {
		},
		computed: {
		}
	}
</script>

<style scoped>
	.top-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 10%;
	}
	.discription {
		margin-bottom: 50px;
		text-align: center;
	}
	.main-links {
		width: 100%;
		margin: 40px 0;
		display: flex;
		justify-content: space-around;
	}
</style>
