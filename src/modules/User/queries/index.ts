import { AuthenticationError, UserInputError } from "apollo-server";
import { Resolvers } from "../../../schema-types";
import { ContextType } from "../../../types";
import bcrypt from "bcrypt";
import { generateToken } from "../../../utils/token";
import { UserModel } from "../../../models/User";

const resolvers: Resolvers<ContextType> = {
  Query: {
    async login(parent, args, ctx, info) {
      const user = await ctx.dataSources.users.getUserByUsername(args.username);

      if (!user) {
        throw new UserInputError("Credenciais incorretas");
      }

      const passwordIsCorrect = bcrypt.compareSync(
        args.password,
        user.password
      );

      if (!passwordIsCorrect) {
        throw new UserInputError("Credenciais incorretas");
      }

      const token = generateToken({ id: user.id, role_id: user.role_id });

      return token;
    },

    async user(parent, args, ctx, info) {
      if (!ctx.user_id)
        throw new AuthenticationError("You need to be logged in");

      if (ctx.hasAdminPermissions && args.id) {
        const user = await ctx.dataSources.users.getUser(args.id);
        if (!user) throw new UserInputError("User does not exists");
        return user;
      }

      const user = (await ctx.dataSources.users.getUser(ctx.user_id))!;

      return user;
    },
  },
};

export default resolvers;
