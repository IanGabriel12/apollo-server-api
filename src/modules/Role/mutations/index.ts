import { Resolvers } from "../../../schema-types";
import { ContextType } from "../../../types";
import crypto from "crypto";

const resolvers: Resolvers<ContextType> = {
  Mutation: {
    insertRole: (parent, args, context) => {
      const role = {
        id: crypto.randomUUID(),
        name: args.name,
        slug: args.name.toLowerCase(),
      };

      return context.dataSources.roles.insertRole(role);
    },
    updateRole: (parent, args, context) => {
      const role = {
        name: args.name,
        slug: args.name.toLowerCase(),
      };

      const updatedRole = context.dataSources.roles.updateRole(args.id, role);
      return updatedRole;
    },
    deleteRole: (parent, args, context) => {
      return context.dataSources.roles.deleteRole(args.id);
    },
  },
};

export default resolvers;
