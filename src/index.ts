import { ApolloServer, gql } from "apollo-server";

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

const typeDefs = gql`
  type Role {
    id: String!
    name: String!
    slug: String!
  }

  type Query {
    roles: [Role!]!
    role(id: String!): Role
  }
`;

const resolvers = {
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
