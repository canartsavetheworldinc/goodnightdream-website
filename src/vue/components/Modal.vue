<template>
	<transition name="modal">
		<div v-mask class="modal-mask">
			<div class="modal-wrapper">
				<div v-modal_container class="modal-container">
					<div v-modal_header class="modal-header">
						<slot name="header">
							{{ modalMessage.header }}
						</slot>
					</div>
					<div v-modal_body class="modal-body">
						<slot name="body">
							{{ modalMessage.body }}
						</slot>
					</div>
					<div v-modal_footer class="modal-footer">
						<slot name="footer">
							{{ modalMessage.footer }}
						</slot>
					</div>
					<div class="modal-button-container">
						<div class="modal-button" @click="close">OK</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
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
			close() {
				// console.log("close!")
				document.removeEventListener("keydown", this.keydownListener)
				this.$store.dispatch("changeModalMessage", null)
			},
			keydownListener(e) {
				if(e.key === "Enter")
					this.close()
				if(e.key === "Escape")
					this.close()
				if(e.key === " ")
					e.preventDefault()
			}
		},
		computed: {
			modalMessage() {
				return this.$store.getters.modalMessage
			}
		},
		directives: {
			mask: {
				inserted(el, binding, vnode) {
					document.activeElement.blur()
					document.addEventListener("keydown", vnode.context.keydownListener)
					el.addEventListener("wheel", (e) => { e.preventDefault() })
					el.addEventListener("touchmove", (e) => { e.preventDefault() }, { passive: false })
				}
			},
			modal_container: {
				inserted(el, binding, vnode) {
					if(!vnode.context.modalMessage.style.container)
						return
					const style = []
					style.push(`color: ${ vnode.context.modalMessage.style.container.color };`)
					style.push(`background-color: ${ vnode.context.modalMessage.style.container.backgroundColor };`)
					el.setAttribute("style", style.join(" "))
				}
			},
			modal_header: {
				inserted(el, binding, vnode) {
					if(!vnode.context.modalMessage.style.header)
						return
					const style = []
					style.push(`color: ${ vnode.context.modalMessage.style.header.color };`)
					style.push(`background-color: ${ vnode.context.modalMessage.style.header.backgroundColor };`)
					el.setAttribute("style", style.join(" "))
				}
			},
			modal_body: {
				inserted(el, binding, vnode) {
					if(!vnode.context.modalMessage.style.body)
						return
					const style = []
					style.push(`color: ${ vnode.context.modalMessage.style.body.color };`)
					style.push(`background-color: ${ vnode.context.modalMessage.style.body.backgroundColor };`)
					el.setAttribute("style", style.join(" "))
				}
			},
			modal_footer: {
				inserted(el, binding, vnode) {
					if(!vnode.context.modalMessage.style.footer)
						return
					const style = []
					style.push(`color: ${ vnode.context.modalMessage.style.footer.color };`)
					style.push(`background-color: ${ vnode.context.modalMessage.style.footer.backgroundColor };`)
					el.setAttribute("style", style.join(" "))
				}
			}
		}
	}
</script>

<style scoped>
	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: table;
		transition: opacity .3s ease;
		touch-action: none;
	}

	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
	}

	.modal-container {
		width: 300px;
		margin: 0px auto;
		/* padding: 15px 30px 30px 20px; */
		background-color: #140584;
		border-radius: 7px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
		transition: all .3s ease;
		font-family: Helvetica, Arial, sans-serif;
	}

	.modal-header {
		font-weight: bold;
		background-color: #104;
		padding: 15px 20px 15px 20px;
	}

	.modal-body {
		margin: 20px 20px 10px 20px;
	}

	.modal-footer {
		/* font-weight: bold; */
		/* background-color: #104; */
		padding: 15px 20px 5px 20px;
	}

	.modal-button-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		padding: 0 10px 10px 10px;
	}

	.modal-button {
		/* float: right; */
		width: 35px;
		border: 1px solid #ddd;
		border-radius: 4px;
		margin: 5px;
		padding: 7px 15px;
		cursor: pointer;
		text-align: center;
	}
	.modal-button:hover {
		background-color: rgba(255, 255, 255, .5);
	}

	/*
	* The following styles are auto-applied to elements with
	* transition="modal" when their visibility is toggled
	* by Vue.js.
	*
	* You can easily play with the modal transition by editing
	* these styles.
	*/

	.modal-enter {
		opacity: 0;
	}

	.modal-leave-active {
		opacity: 0;
	}

	.modal-enter .modal-container,
	.modal-leave-active .modal-container {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
</style>

