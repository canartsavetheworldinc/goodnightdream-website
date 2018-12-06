<template>
	<div class="page-container">
		<div class="error-code">
			404
		</div>
		<div class="error-message">
			<Markdown v-if="locale === 'en'">
Sorry, Page Not Found
			</Markdown>
			<Markdown v-if="locale === 'jp'">
ページが見つかりません
			</Markdown>
		</div>
	</div>
</template>

<script>
	const Markdown = require("./components/Markdown.vue")

	module.exports = {
		components: {
			Markdown
		},
		data() {
			return {
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
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.error-code {
		font-size: 30px;
		margin-bottom: -10px;
	}
	.error-message {
		margin-bottom: 10%;
	}
</style>
