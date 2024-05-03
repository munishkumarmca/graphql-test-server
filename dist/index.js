"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const graphql_tag_1 = require("graphql-tag");
const typeDefs = (0, graphql_tag_1.gql)((0, fs_1.readFileSync)(path_1.default.resolve(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
}));
async function startApolloServer() {
    const server = new server_1.ApolloServer({ typeDefs });
    const { url } = await (0, standalone_1.startStandaloneServer)(server);
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}
startApolloServer();
//# sourceMappingURL=index.js.map