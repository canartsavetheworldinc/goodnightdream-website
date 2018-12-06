<template>
	<div class="top-container">
		<div class="discription">
			<Markdown v-if="locale === 'en'">
“Good night. Hope you have a good dream.”<br>
<br>
An woman undertaking a management of Dreaminn for some reasons face worries and dreams of visitors in their “dreams”<br>
<br>
What do people having hopes and troubles see in “dreams”?<br>
<br>
This is the RPG making “DREAMS” of ◾︎*.◾︎/◾︎ come true
			</Markdown>
			<Markdown v-if="locale === 'jp'">
「おやすみなさい よい夢を」<br>
<br>
とある理由から宿屋の管理を引き受けた主人公は 夢の中で宿泊客の悩みと夢に向き合っていく<br>
<br>
悩みや希望を抱え 人々は何を “ユメ” に見るのか<br>
<br>
◾︎*.◾︎/◾︎の “ユメ” を叶える “夢物語” RPG
			</Markdown>
		</div>
		<div class="main-links">
			<MainLink class="main-link story" :src="mainLinks.story" title="Story" href="/story"></MainLink>
			<MainLink class="main-link about" :src="mainLinks.about" title="About" href="/about"></MainLink>
			<MainLink class="main-link demo" :src="mainLinks.demo" title="Demo" href="/demo"></MainLink>
		</div>
		<div class="main-links">
			<MainLink class="main-link twitter" :src="mainLinks.twitter" title="Twitter" ahref="https://twitter.com/goodnightdream_"></MainLink>
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
			locale() {
				// console.log(this.$store.getters.getLocale)
				return this.$store.getters.getLocale
			}
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
		margin: 15px 0 35px 0;
		text-align: center;
	}
	.main-links {
		width: 100%;
		margin: 40px 0;
		display: flex;
		justify-content: space-around;
	}
	.main-link {
		width: 105px;
	}
	.main-link.about {
		transform: translateY(-20px);
	}
	.main-link.twitter {
		width: 56px;
	}
	@media(max-width:768px) {
		.discription {
			margin: 5px 0 25px 0;
		}
		.main-links {
			margin: 25px 0 10px 0;
		}
		.main-link {
			width: 55px;
		}
	}
</style>
