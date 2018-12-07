module.exports = class {
	constructor(header = "", body = "", footer = "", style = {}) {
		if(typeof style !== "object")
			throw new Error(`style object is invalid`)
		if(typeof header === "object") {
			if(typeof body === "object")
				style = body
			const obj = header
			header = obj.header || ""
			body = obj.body || ""
			footer = obj.footer || ""
			style = obj.style || style
		}
		this.header = header
		this.body = body
		this.footer = footer
		this.style = style
	}
	get object() {
		return {
			header: this.header,
			body: this.body,
			footer: this.footer,
			style: this.style
		}
	}
}
