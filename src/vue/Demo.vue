<template>
	<div class="page-container">
		<Index :src="indexImg" title="Demo"></Index>
		<div class="discription">
			<p>開発中です</p>
			<p>しばらくお待ちください</p>
		</div>
	</div>
</template>

<script>
	const Index = require("./components/Index.vue")

	module.exports = {
		components: {
			Index
		},
		data() {
			return {
				indexImg: require("../img/top_right.png")
			}
		},
		methods: {
		},
		computed: {
		}
	}
</script>

<style scoped>
	.page-container {
		margin: 0 10%;
	}
	.discription {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
