module.exports = class {
	constructor(header = "", body = "", footer = "") {
		if(typeof header === "object") {
			const obj = header
			header = obj.header || ""
			body = obj.body || ""
			footer = obj.footer || ""
		}
		this.header = header
		this.body = body
		this.footer = footer
	}
	get object() {
		return {
			header: this.header,
			body: this.body,
			footer: this.footer
		}
	}
}
