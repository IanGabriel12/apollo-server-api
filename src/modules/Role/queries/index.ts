import { Resolvers } from "../../../schema-types";
import { ContextType } from "../../../types";

const resolvers: Resolvers<ContextType> = {
  Query: {
    role: (parent, args, context, data) => {
      return context.dataSources.roles.getRole(args.id) || null;
    },

    roles: (parent, args, context, data) => {
      return context.dataSources.roles.listRoles();
    },
  },
};

export default resolvers;
