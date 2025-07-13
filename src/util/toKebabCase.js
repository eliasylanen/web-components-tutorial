export const toKebabCase = (str) => {
	return str
		.replace(/[^\w-]+/g, " ")
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/^-+|-+$/g, "");
};
