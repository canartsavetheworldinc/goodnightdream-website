<template>
	<div class="container">
		<div class="logo" @click="clickLogo()">
			<router-link to="/">
				<img src="../../img/logo_tsp.png" alt="GoodNightDream" />
			</router-link>
		</div>
		<div class="locale"><a href="#" @click="locale(`en`)">EN</a> / <a href="#" @click="locale('jp')">JP</a></div>
	</div>
</template>

<script>
	module.exports = {
		data() {
			return {
				path: this.$route.path
			}
		},
		watch: {
			$route() {
				this.path = this.$route.path
			}
		},
		methods: {
			locale(lang) {
				// console.log(lang)
				this.$store.dispatch("changeLocale", lang)
			},
			clickLogo() {
				if(this.path === "/")
					this.$store.dispatch("clickLogo")
				console.log(this.path, this.clickCount)
			},
			showModal(message) {
				this.$store.dispatch("changeModalMessage", message)
			}
		},
		computed: {
			clickCount() {
				return this.$store.getters.logoClickCount
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
