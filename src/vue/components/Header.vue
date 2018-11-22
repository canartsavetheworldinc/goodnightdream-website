<template>
	<div class="container">
		<div class="logo">
			<router-link to="/">
				<img src="../../img/logo_tsp.png" />
			</router-link>
		</div>
		<div class="locale"><router-link to="/">EN</router-link> / <router-link to="/">JP</router-link></div>
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
