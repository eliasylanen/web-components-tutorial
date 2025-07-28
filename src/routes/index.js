import { HelloWorld } from "./hello-world/index.js";
import { TemplateTest } from "./template-test/index.js";
import { TemplateSlots } from "./template-slots/index.js";
import { DeclarativeDom } from "./declarative-dom/index.js";

import { toKebabCase } from "../util/toKebabCase.js";

[
	HelloWorld,
	TemplateTest,
	TemplateSlots,
	DeclarativeDom,
].forEach((component) => {
	const { name } = component;
	customElements.define(toKebabCase(name), component);
});

export {
	HelloWorld,
	TemplateTest,
	TemplateSlots,
	DeclarativeDom
};
