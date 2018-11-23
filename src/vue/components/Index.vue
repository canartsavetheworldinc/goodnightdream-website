<template>
	<div class="index-container">
		<img :src="src" />
		<div class="title">{{ title }}</div>
	</div>
</template>

<script>
	module.exports = {
		props: ["src", "title"]
	}
</script>

<style scoped>
	.index-container {
		width: 100%;
		height: 30px;
		display: flex;
		align-items: center;
		font-size: 27px;
		border-left: 10px solid #44b;
		border-bottom: 1px solid #44b;
		margin-bottom: 15px;
	}
	.index-container img {
		height: 100%;
		margin: 0 4px;
	}
	.index-container .title {
		font-family: "cheese";
	}
</style>
