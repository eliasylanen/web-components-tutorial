import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import spdy from "spdy";

const app = express();
const port = 3000;

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files (e.g., JavaScript, CSS) from the current directory
app.use(express.static(path.join(__dirname, "src")));

// Serve the index.html file for all GET requests
app.get("/", (_, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

// Serve the index.html file for all GET requests
app.get("/:route", (req, res) => {
	const { route } = req.params;
	res.sendFile(path.join(__dirname, `src/routes/${route}/index.html`));
});

// Load SSL/TLS certificates
const options = {
	key: fs.readFileSync(path.join(__dirname, "key.pem")),
	cert: fs.readFileSync(path.join(__dirname, "cert.pem")),
};

const server = spdy.createServer(options, app);

server.listen(port, () => {
	console.log(`App listening on port ${port}`);
	console.log("SSL enabled");
});
