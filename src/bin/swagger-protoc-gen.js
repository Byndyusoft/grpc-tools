#!/usr/bin/env node

"use strict";

const path = require("path");
const find = require("find");
const findNodeModules = require("find-node-modules");
const { execFileSync } = require("child_process");

const exeExt = process.platform === "win32" ? ".exe" : "";
const modulesDirectory = findNodeModules({ relative: false })[0];

const protocPath = find.fileSync(new RegExp(`protoc${exeExt}$`), path.join(modulesDirectory, "grpc-tools"))[0];
const pluginPath = path.join(__dirname, `protoc-gen-swagger-${process.platform}${exeExt}`);
const includePath = path.join(__dirname, "..", "include");

const args = ["--plugin=protoc-gen-swagger=" + pluginPath, "-I", includePath].concat(process.argv.slice(2));
execFileSync(protocPath, args);
