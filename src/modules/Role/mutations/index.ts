import { AuthenticationError } from "apollo-server";
import { Resolvers } from "../../../schema-types";
import { ContextType } from "../../../types";

const resolvers: Resolvers<ContextType> = {
  Mutation: {
    insertRole: (parent, args, context) => {
      if (!context.hasAdminPermissions)
        throw new AuthenticationError("You need to be a admin");

      return context.dataSources.roles.insertRole(args);
    },
    updateRole: (parent, args, context) => {
      if (!context.hasAdminPermissions)
        throw new AuthenticationError("You need to be a admin");

      const updatedRole = context.dataSources.roles.updateRole(args, args.id);
      return updatedRole;
    },
    deleteRole: (parent, args, context) => {
      if (!context.hasAdminPermissions)
        throw new AuthenticationError("You need to be a admin");

      return context.dataSources.roles.deleteRole(args.id);
    },
  },
};

export default resolvers;
