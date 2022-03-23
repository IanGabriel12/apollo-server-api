import { ApolloServer } from "apollo-server";
import loadEverything from "./utils/load-files";
import dotenv from "dotenv";
import KnexRoleDataSource from "./datasources/KnexRoleDataSource";
import jwt from "jsonwebtoken";
import { TokenPayload } from "./types";
import {
  hasAdminPermissions,
  hasComercialPermissions,
  hasRegionalPermissions,
} from "./utils/permissions";

dotenv.config();

loadEverything().then(([typeDefs, resolvers, dataSources]) => {
  const server = new ApolloServer({
    introspection: true,
    typeDefs,
    resolvers,
    dataSources,
    context: async ({ req }) => {
      const token = req.headers.authorization || "";
      const payload = jwt.decode(token) as TokenPayload | null;

      if (!payload) {
        return {
          user_id: null,
          hasAdminPermissions: false,
          hasRegionalPermissions: false,
          hasComercialPermissions: false,
        };
      }

      const role = await new KnexRoleDataSource().getRole(payload.role_id);

      return {
        user_id: payload.id,
        hasAdminPermissions: hasAdminPermissions(role.name),
        hasRegionalPermissions: hasRegionalPermissions(role.name),
        hasComercialPermissions: hasComercialPermissions(role.name),
      };
    },
  });

  server.listen({ port: process.env.PORT || 4000 }).then((response) => {
    console.log("Server ready at " + response.url);
  });
});
