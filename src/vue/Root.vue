<template>
	<div class="root-container">
		<Header></Header>
		<div class="root-content">
			<router-view></router-view>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	const Header = require("./components/Header.vue")
	const Footer = require("./components/Footer.vue")

	module.exports = {
		components: {
			Header,
			Footer,
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
		height: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	.root-content {
		flex: 1;
	}
</style>
