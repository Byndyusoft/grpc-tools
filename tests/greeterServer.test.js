const path = require("path");
const grpc = require("grpc");
const { GrpcHostBuilder } = require("grpc-host-builder");
const protoLoader = require("grpc-pbf-loader").packageDefinition;

const {
  HelloRequest: ServerHelloRequest,
  HelloResponse: ServerHelloResponse
} = require("./generated/server/greeter_pb").v1;
const { HelloRequest: ClientHelloRequest, GreeterClient } = require("./generated/client/greeter_client_pb").v1;

const grpcBind = "0.0.0.0:3000";
const packageObject = grpc.loadPackageDefinition(
  protoLoader.loadSync(path.join(__dirname, "./protos/greeter.proto"), {
    includeDirs: [path.join(__dirname, "../src/include/")]
  })
);

let server = null;
let client = null;

/**
 * @param {string} name
 * @returns {Promise<string>}
 */
const getMessage = async (name) => {
  const request = new ClientHelloRequest();
  request.setName(name);

  client = new GreeterClient(grpcBind, grpc.credentials.createInsecure());
  return (await client.sayHello(request)).getMessage();
};

afterEach(() => {
  if (client) client.close();
  if (server) server.forceShutdown();
});

/**
 * @param {function(GrpcHostBuilder):GrpcHostBuilder} configurator
 * @returns {import("grpc").Server}
 */
const createHost = (configurator) => {
  return configurator(new GrpcHostBuilder())
    .addService(packageObject.v1.Greeter.service, {
      sayHello: (call) => {
        const request = new ServerHelloRequest(call.request);
        return new ServerHelloResponse({
          message: `Hello, ${request.name}!`
        });
      }
    })
    .bind(grpcBind)
    .build();
};

test("Must say hello", async () => {
  // Given
  server = createHost((x) => x);

  // When
  const actualMessage = await getMessage("Tom");

  // Then
  expect(actualMessage).toBe("Hello, Tom!");
});
