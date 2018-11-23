<template>
	<div class="top-container">
		<div class="discription">
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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

	module.exports = {
		components: {
			MainLink
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
	}
	.main-links {
		width: 100%;
		margin: 40px 0;
		display: flex;
		justify-content: space-around;
	}
</style>
