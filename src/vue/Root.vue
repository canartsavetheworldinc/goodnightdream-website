<template>
	<div class="root-container">
		<Header></Header>
		<div class="root-content">
			<Top v-if="pathname === `/`"></Top>
			<Twitter v-if="pathname === `/twitter`"></Twitter>
			<Story v-if="pathname === `/story`"></Story>
			<Demo v-if="pathname === `/demo`"></Demo>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	const Header = require("./components/Header.vue")
	const Footer = require("./components/Footer.vue")
	const Top = require("./Top.vue")
	const Twitter = require("./Twitter.vue")
	const Story = require("./Story.vue")
	const Demo = require("./Demo.vue")

	module.exports = {
		components: {
			Header,
			Footer,
			Top,
			Twitter,
			Story,
			Demo
		},
		data() {
			return {
			}
		},
		methods: {
		},
		computed: {
			pathname() {
				return window.location.pathname
			}
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
