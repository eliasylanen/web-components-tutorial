import { HelloWorld } from "./hello-world/index.js";
import { TemplateTest } from "./template-test/index.js";

import { toKebabCase } from "../util/toKebabCase.js";

[HelloWorld, TemplateTest].forEach((component) => {
	const { name } = component;
	customElements.define(toKebabCase(name), component);
});

export { HelloWorld, TemplateTest };
