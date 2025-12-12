const path = require("path");

// Point to the Next.js standalone server
const server = require("./.next/standalone/server.js");

// Next.js standalone expects the .next folder in the same structure
process.chdir(path.join(__dirname, ".next", "standalone"));
