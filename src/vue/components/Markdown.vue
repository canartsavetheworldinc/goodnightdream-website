<template>
	<div class="md-container" v-html="parsed">
		<slot></slot>
	</div>
</template>

<script>
	const marked = require("marked")

	module.exports = {
		props: ["src"],
		components: {
		},
		data() {
			return {
				source: "",
				parsed: ""
			}
		},
		created() {
			if(this.$slots.default) {
				for(let slot of this.$slots.default) {
					// console.log(slot)
					if(slot.tag === "br")
						this.source += "\n\n"
					if(slot.tag === "hr")
						this.source += `<hr style="border: 0; height: 1.5em;">`
					if(slot.text)
						this.source += slot.text
				}
			}
		},
		beforeMount() {
			this.parsed = marked(this.source)
		},
		methods: {
		},
		computed: {
		}
	}
</script>

<style scoped>
	.md-container {
	}
</style>
