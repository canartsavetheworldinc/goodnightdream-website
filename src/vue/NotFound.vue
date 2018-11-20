<template>
	<div class="page-container">
		<div class="error-code">
			404
		</div>
		<div class="logo">
			<a href="/">
				<img src="../img/logo_tsp.png" />
			</a>
		</div>
		<div>
			Sorry, Page Not Found
		</div>
	</div>
</template>

<script>
	module.exports = {
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
	.page-container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.error-code {
		font-size: 30px;
	}
	.logo {
	}
	.logo img {
		height: 100%;
	}
</style>
