const path = require("path");
const cpy = require("cpy");

/**
 * @param {string} sourceBasePath
 * @param {Array<string>} sourcePaths
 * @param {string} destinationBasePath
 * @returns {Promise<void>}
 */
async function copyFiles(sourceBasePath, sourcePaths, destinationBasePath) {
  for (const sourcePath of sourcePaths)
    await cpy(path.join(sourceBasePath, sourcePath, "*.proto"), path.join(destinationBasePath, sourcePath));
}

(async () => {
  const destinationBasePath = path.join(__dirname, "..", "src", "include");
  await copyFiles(
    path.join(__dirname, "..", "deps", "googleapis"),
    [path.join("google", "type"), path.join("google", "api"), path.join("google", "rpc")],
    destinationBasePath
  );
  await copyFiles(
    path.join(__dirname, "..", "deps", "grpc-gateway"),
    [path.join("protoc-gen-swagger", "options")],
    destinationBasePath
  );
})();
