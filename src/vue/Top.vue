<template>
	<div class="top-container">
		<Header></Header>
		<div class="logo">
			<img src="../img/logo_tsp.png" />
		</div>
		<div class="discription">
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		</div>
		<div class="main-links">
			<MainLink :src="mainLinks.twitter" title="hoge" href="/twitter"></MainLink>
			<MainLink :src="mainLinks.story" title="hoge" href="/story"></MainLink>
			<MainLink :src="mainLinks.demo" title="hoge" href="/demo"></MainLink>
		</div>
	</div>
</template>

<script>
	const Header = require("./components/Header.vue")
	const MainLink = require("./components/MainLink.vue")

	module.exports = {
		components: {
			Header,
			MainLink
		},
		data() {
			return {
				mainLinks: {
					twitter: require("../img/dummy-round.png"),
					story: require("../img/dummy-round.png"),
					demo: require("../img/dummy-round.png")
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
	.logo {
		height: 150px;
	}
	.logo img {
		height: 100%;
	}
	.discription {
	}
	.main-links {
		width: 100%;
		margin: 100px 0;
		display: flex;
		justify-content: space-around;
	}
</style>
