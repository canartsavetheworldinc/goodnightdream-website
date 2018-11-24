<template>
	<div class="container">
		<div class="icon">
			<router-link :to="href">
				<img :src="src" />
			</router-link>
		</div>
		<div class="title">
			<router-link :to="href">
				{{ title }}
			</router-link>
		</div>
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
	.icon img {
		width: 100%;
		height: 100%;
	}
	.title {
		font-size: 1.3em;
		font-family: "cheese";
	}
	.title a {
		color: #ddd;
		text-decoration: none;
	}
	.icon:hover, .title:hover {
		filter: brightness(80%);
	}
</style>
