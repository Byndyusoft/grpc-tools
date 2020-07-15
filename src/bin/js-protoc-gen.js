#!/usr/bin/env node

"use strict";

const path = require("path");
const { execSync } = require("child_process");

const command = ["npx pbjs", "--p", path.join(__dirname, "..", "include")].concat(process.argv.slice(2)).join(" ");
execSync(command);
