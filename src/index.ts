import { ApolloServer } from "apollo-server";
import loadEverything from "./utils/load-files";
import dotenv from "dotenv";

dotenv.config();

loadEverything().then(([typeDefs, resolvers, dataSources]) => {
  const server = new ApolloServer({
    introspection: true,
    typeDefs,
    resolvers,
    dataSources,
  });

  server.listen().then((response) => {
    console.log("Server ready at " + response.url);
  });
});
