import { ApolloServer } from "apollo-server";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { Resolvers } from "./schema-types";
import RoleDataSource from "./datasources/RoleDatasource";
import { ContextType } from "./types";
import path from "path";

const typeDefs = loadSchemaSync(path.join(__dirname, "schema.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

const resolvers: Resolvers<ContextType> = {
  Query: {
    roles: (parent, args, context, info) => {
      return context.dataSources.roles.listRoles();
    },
    role: (parent, args, context) => {
      return context.dataSources.roles.getRole(args.id) || null;
    },
  },
};

const dataSources = () => ({
  roles: new RoleDataSource(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen().then((response) => {
  console.log("Server ready at " + response.url);
});
