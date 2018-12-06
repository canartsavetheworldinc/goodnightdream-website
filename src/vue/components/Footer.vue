<template>
	<div class="container">
		<div class="copyright">
			Copyright © 2018 GoodNightDream
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.container {
		min-height: 16px;
		margin-top: 100px;
		padding: 20px;
		background-color: #150030;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	.copyright {
		text-align: center;
	}
	@media(max-width:768px) {
		.container {
			margin-top: 30px;
		}
	}
</style>
