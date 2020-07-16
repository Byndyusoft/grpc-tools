# grpc-tools

[![npm version](https://badge.fury.io/js/%40byndyusoft%2Fgrpc-tools.svg)](https://www.npmjs.com/package/@byndyusoft/grpc-tools)
[![npm downloads](https://img.shields.io/npm/dt/@byndyusoft/grpc-tools.svg)](https://www.npmjs.com/package/@byndyusoft/grpc-tools)
[![Build Status](https://travis-ci.org/Byndyusoft/grpc-tools.svg?branch=develop)](https://travis-ci.org/Byndyusoft/grpc-tools)

A set of tools to simplify working with gRPC

# Install

`npm i @byndyusoft/grpc-tools`

# Usage

## js-protoc-gen

```
$ js-protoc-gen -r greeter -t static-module -w commonjs --no-verify -o ./tests/generated/server/greeter_pb.js ./tests/protos/greeter.proto
```

## swagger-protoc-gen

```
$ swagger-protoc-gen --swagger_opt=json_names_for_fields=true --swagger_out=logtostderr=true:./tests/generated/server/ -I ./tests/protos/ greeter.proto
```
