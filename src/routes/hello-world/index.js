export class HelloWorld extends HTMLElement {
	constructor() {
		super();
		this.name = "World";
	}

	static get observedAttributes() {
		return ["name"];
	}

	attributeChangedCallback(prop, oldValue, newValue) {
		if (oldValue === newValue) return;
		this[prop] = newValue;
	}

	connectedCallback() {
		const shadow = this.attachShadow({ mode: "closed" });

		shadow.innerHTML = `
			<style>
				:host {
					display: block;
				}

				p {
					color: blue;
				}
			</style>

			<p>Hello, ${this.name}!</p>`;
	}
}
