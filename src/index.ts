import { ApolloServer } from "apollo-server";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { Resolvers } from "./schema-types";

const roles = [
  {
    id: "123",
    name: "Administrador",
    slug: "administrador",
  },
  {
    id: "124",
    name: "Regional",
    slug: "regional",
  },
  {
    id: "125",
    name: "Comercial",
    slug: "comercial",
  },
  {
    id: "126",
    name: "Trabalhador",
    slug: "trabalhador",
  },
];

const typeDefs = loadSchemaSync("./schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});

const resolvers: Resolvers = {
  Query: {
    roles: () => roles,
    role: (parent: any, args: { id: string }) => {
      return roles.find((role) => role.id === args.id) || null;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then((response) => {
  console.log("Server ready at " + response.url);
});
