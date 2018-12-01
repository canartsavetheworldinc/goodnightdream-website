<template>
	<div class="container">
		<div class="logo" @click="showModal({ header: `test header`, body: `test body`, footer: `test footer` })">
			<router-link to="/">
				<img src="../../img/logo_tsp.png" alt="GoodNightDream" />
			</router-link>
		</div>
		<div class="locale"><a :href="hash" @click="locale(`en`)">EN</a> / <a :href="hash" @click="locale('jp')">JP</a></div>
	</div>
</template>

<script>
	module.exports = {
		data() {
			return {
				hash: window.location.hash
			}
		},
		methods: {
			locale(lang) {
				// console.log(lang)
				this.$store.dispatch("changeLocale", lang)
			},
			showModal(message) {
				this.$store.dispatch("changeModalMessage", message)
			}
		}
	}
</script>

<style scoped>
	a {
		color: #ddd;
	}
	.container {
		height: 300px;
		min-height: 300px;
		margin: -50px 0 -60px 0;
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
		top: 15px;
		right: 15px;
	}
</style>
