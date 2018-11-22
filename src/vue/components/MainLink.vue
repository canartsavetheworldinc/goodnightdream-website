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
			jump() {
				window.location.href = this.href
			}
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
		width: 150px;
		height: 150px;
		/*border-radius: 100px;*/
		cursor: pointer;
	}
	.icon:hover {
		filter: brightness(80%);
	}
	.icon img {
		max-width: 100%;
		max-height: 100%;
	}
	.title {
		font-size: 1.3em;
	}
</style>
