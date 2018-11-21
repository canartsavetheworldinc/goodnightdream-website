<template>
	<div class="page-container">
		<Index :src="indexImg" title="twitter"></Index>
		<div class="discription">
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
				indexImg: require("../img/dummy-round.png")
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
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 10%;
	}
	.discription {
	}
</style>
