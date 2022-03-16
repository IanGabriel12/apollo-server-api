import { ApolloServer } from "apollo-server";
import loadEverything from "./utils/load-files";

loadEverything().then(([typeDefs, resolvers, dataSources]) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
  });

  server.listen().then((response) => {
    console.log("Server ready at " + response.url);
  });
});
