<template>
	<div class="page-container">
		<div class="error-code">
			404
		</div>
		<div class="error-message">
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
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.error-code {
		font-size: 30px;
	}
	.error-message {
		margin-bottom: 10%;
	}
</style>
