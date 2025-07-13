import * as Components from "../routes/index.js";
import { toKebabCase } from "../util/toKebabCase.js";

const linksContainer = document.querySelector("#links");

Object.keys(Components).forEach((componentName) => {
	const kebabCaseName = toKebabCase(componentName);

	const link = document.createElement("a");
	link.textContent = componentName;
	link.href = `/${kebabCaseName}`;

	linksContainer.appendChild(link);
});
