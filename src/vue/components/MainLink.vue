<template>
	<div class="container">
		<div class="icon">
			<router-link v-if="href" :to="href">
				<img :src="src" />
			</router-link>
			<a v-else-if="ahref" :href="ahref" target="_blank">
				<img :src="src" />
			</a>
			<span v-else>
				<img :src="src" />
			</span>
		</div>
		<div class="title">
			<router-link v-if="href" :to="href">
				{{ title }}
			</router-link>
			<a v-else-if="ahref" :href="ahref" target="_blank">
				{{ title }}
			</a>
			<span v-else>
				{{ title }}
			</span>
		</div>
	</div>
</template>

<script>
	module.exports = {
		props: ["href", "ahref", "src", "title"],
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
		/* width: 70px;
		height: 70px; */
		/*border-radius: 100px;*/
		cursor: pointer;
	}
	.icon img {
		width: 100%;
		height: 100%;
	}
	.title {
		font-size: 1.3em;
		/* font-family: "cheese"; */
	}
	.title a {
		color: #ddd;
		text-decoration: none;
	}
	.icon:hover, .title:hover {
		filter: brightness(80%);
	}
</style>
