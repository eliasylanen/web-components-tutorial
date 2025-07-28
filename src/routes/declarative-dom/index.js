export class DeclarativeDom extends HTMLElement {
	constructor() {
		super();
		this.name = 'World';

		const supportsDeclarative = Object.hasOwn(HTMLElement.prototype, 'attachInternals');
		const internals = supportsDeclarative ? this.attachInternals() : undefined;

		this.shadow = internals?.shadowRoot;

		if (!this.shadow) {
			// there wasn't one. create a new Shadow Root:
			shadow = this.attachShadow({
				mode: 'open',
			});
			shadow.innerHTML = `<slot name="msgtext" class="hw-text"></slot>
				<slot></slot>`;
		}
	}

	static get observedAttributes() {
		return ['name'];
	}

	attributeChangedCallback(prop, oldValue, newValue) {
		if (oldValue === newValue) return;
		this[prop] = newValue;
	}

	connectedCallback() {
		const hwMsg = `Hello ${this.name}`;

		// find all slots with a hw-text class
		this.shadow.querySelector('slot.hw-text').assignedNodes()[0].textContent = hwMsg;
	}
}
