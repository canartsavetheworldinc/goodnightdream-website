<template>
	<div class="root-container">
		<Header></Header>
		<div class="root-content">
			<Top></Top>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	// const Hello = require("./components/Hello.vue")
	const Header = require("./components/Header.vue")
	const Footer = require("./components/Footer.vue")
	const Top = require("./Top.vue")

	module.exports = {
		components: {
			Header,
			Footer,
			Top
		},
		data() {
			return {
			}
		},
		methods: {
		},
		computed: {
		}
	}
</script>

<style scoped>
	.root-container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	.root-content {
		flex-grow: 1;
	}
</style>
