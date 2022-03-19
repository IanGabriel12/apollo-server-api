import { Resolvers } from "../../../schema-types";
import { ContextType } from "../../../types";

const resolvers: Resolvers<ContextType> = {
  Mutation: {
    insertRole: (parent, args, context) => {
      return context.dataSources.roles.insertRole(args);
    },
    updateRole: (parent, args, context) => {
      const updatedRole = context.dataSources.roles.updateRole(args, args.id);
      return updatedRole;
    },
    deleteRole: (parent, args, context) => {
      return context.dataSources.roles.deleteRole(args.id);
    },
  },
};

export default resolvers;
