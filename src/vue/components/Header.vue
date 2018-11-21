<template>
	<div class="container">
		<div class="logo">
			<a href="/">
				<img src="../../img/logo_tsp.png" />
			</a>
		</div>
		<div class="locale"><a href="/">EN</a> / <a href="/">JP</a></div>
	</div>
</template>

<script>
</script>

<style scoped>
	a {
		color: #ddd;
	}
	.container {
		height: 150px;
		display: flex;
		justify-content: center;
	}
	.logo {
		height: 100%;
	}
	.logo img {
		height: 100%;
	}
	.locale {
		position: absolute;
		top: 5px;
		right: 5px;
	}
</style>
