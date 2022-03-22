import { UserProps } from "../../../models/User";
import { Resolvers } from "../../../schema-types";
import { ContextType } from "../../../types";
import jwt from "jsonwebtoken";
import { UserInputError } from "apollo-server";
import bcrypt from "bcrypt";
import { generateToken } from "../../../utils/token";

const SALT_ROUNDS = 10;

const resolver: Resolvers<ContextType> = {
  Mutation: {
    async createUser(parent, args, ctx, info) {
      const data = Object.assign({}, args.data) as UserProps;

      const usernameAlreadyExists = Boolean(
        await ctx.dataSources.users.getUserByUsername(data.username)
      );

      if (usernameAlreadyExists) {
        throw new UserInputError("Username already exists");
      }

      const cryptedPassword = bcrypt.hashSync(data.password, SALT_ROUNDS);
      data.password = cryptedPassword;

      const user = await ctx.dataSources.users.insertUser(data);

      const token = generateToken({ id: user.id, role_id: user.role_id });

      return token;
    },
  },
};

export default resolver;
