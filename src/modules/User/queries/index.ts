import { UserInputError } from "apollo-server";
import { Resolvers } from "../../../schema-types";
import { ContextType } from "../../../types";
import bcrypt from "bcrypt";
import { generateToken } from "../../../utils/token";

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
  },
};

export default resolvers;
