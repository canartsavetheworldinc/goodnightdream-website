<template>
	<div class="container">
		<div class="icon">
			<router-link :to="href">
				<img :src="src">
			</router-link>
		</div>
		<div class="title">{{ title }}</div>
	</div>
</template>

<script>
	module.exports = {
		props: ["href", "src", "title"],
		components: {
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
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.icon {
		/*border: 1px solid red;*/
		width: 70px;
		height: 70px;
		/*border-radius: 100px;*/
		cursor: pointer;
	}
	.icon:hover {
		filter: brightness(80%);
	}
	.icon img {
		width: 100%;
		height: 100%;
	}
	.title {
		font-size: 1.3em;
	}
</style>
