<template>
	<div class="page-container">
		<Index :src="indexImg" title="twitter"></Index>
		<div class="discription">
			<Markdown v-if="locale === 'en'">
			</Markdown>
			<Markdown v-if="locale === 'jp'">
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
				indexImg: require("../img/twitter_logo.png")
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
	}
</style>
