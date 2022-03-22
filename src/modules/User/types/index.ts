import { Resolvers } from "../../../schema-types";
import { ContextType } from "../../../types";

const typeResolver: Resolvers<ContextType> = {
  User: {
    async role(parent, args, ctx, info) {
      const role_id = parent.role_id;
      return await ctx.dataSources.roles.getRole(role_id);
    },
  },
};

export default typeResolver;
