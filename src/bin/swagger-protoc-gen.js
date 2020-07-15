#!/usr/bin/env node

"use strict";

const path = require("path");
const pathKey = require("path-key");
const { execFileSync } = require("child_process");

const env = { ...process.env };
const pathKeyName = pathKey({ env });
env[pathKeyName] = process.mainModule.paths
  .map((x) => path.join(x, "grpc-tools", "bin"))
  .concat(__dirname, env[pathKeyName])
  .join(path.delimiter);

const exeExt = process.platform === "win32" ? ".exe" : "";
const includePath = path.join(__dirname, "..", "include");
const pluginPath = path.join(__dirname, `protoc-gen-swagger-${process.platform}${exeExt}`);

const args = ["--plugin=protoc-gen-swagger=" + pluginPath, "-I", includePath].concat(process.argv.slice(2));
execFileSync(`protoc${exeExt}`, args, { env });
