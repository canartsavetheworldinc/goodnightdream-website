<template>
	<div class="index-container">
		<img :src="src" />
		<div class="title">{{ title }}</div>
		<img class="character" v-if="character" :src="character" />
	</div>
</template>

<script>
	module.exports = {
		props: ["src", "title", "character"]
	}
</script>

<style scoped>
	.index-container {
		width: 100%;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		font-size: 27px;
		/* border-left: 10px solid #44b; */
		border-bottom: 2px solid #44b;
		padding-bottom: 3px;
		margin-bottom: 15px;
	}
	.index-container img {
		height: 100%;
		margin: 0 4px;
	}
	.index-container img.character {
		height: 45px;
	}
	.index-container .title {
		/* font-family: "cheese"; */
	}
</style>
