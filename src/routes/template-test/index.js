const content = ["Pepe", "Dege", "Ylli"];

export class TemplateTest extends HTMLElement {
	connectedCallback() {
		const shadow = this.attachShadow({ mode: "closed" });
		const template = document.querySelector("#templateTest").content.cloneNode(true);

		Array.from(template.querySelectorAll(".hw-text")).forEach((li, index) => {
			li.textContent = `Morjes ${content[index]}!`;
		});

		shadow.appendChild(template);
	}
}
