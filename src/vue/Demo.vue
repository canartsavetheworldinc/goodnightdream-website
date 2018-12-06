<template>
	<div class="page-container">
		<Index :src="indexImg" title="Demo" :character="indexCharaImg"></Index>
		<div class="discription">
			<Markdown v-if="locale === 'en'">
under development<br>
please wait<br>
<br>
demo coming this spring
			</Markdown>
			<Markdown v-if="locale === 'jp'">
開発中です<br>
しばらくお待ちください<br>
(デモ版公開予定 2019年1月末日)
			</Markdown>
		</div>
	</div>
</template>

<script>
	const Index = require("./components/Index.vue")
	const Markdown = require("./components/Markdown.vue")

	module.exports = {
		components: {
			Index
		},
		data() {
			return {
				indexImg: require("../img/top_right.png"),
				indexCharaImg: require("../img/programming_mouse-demo.png")
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
		margin: 0 10%;
	}
	.discription {
		margin: 15px 0 35px 0;
		text-align: center;
	}
</style>
