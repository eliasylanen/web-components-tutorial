export class TemplateSlots extends HTMLElement {
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
		const hwMsg = `Hello ${this.name}`;

		// append shadow DOM
		shadow.append(document.getElementById("template-slots").content.cloneNode(true));

		// find all slots with a hw-text class
		Array.from(shadow.querySelectorAll("slot.hw-text")).forEach(
			(n) => (n.assignedNodes()[0].textContent = hwMsg),
		);
	}
}
