import IUserDataSource from "../interfaces/IUserDataSource";
import { UserModel, UserProps } from "../models/User";
import KnexDataSource from "../utils/KnexDataSource";

type UserDBReturn = {
  username: string;
  password: string;
  name: string;
  email: string;
  role_id: string;
  id: string;
};

export default class KnexUserDataSource
  extends KnexDataSource
  implements IUserDataSource
{
  async getUser(id: string): Promise<UserModel | null> {
    const data = (await this.knex("users")
      .select("*")
      .where("id", "=", id)
      .first()) as UserDBReturn | undefined;

    if (!data) return null;

    const { id: userId, ...props } = data;

    return UserModel.createUser(props, userId);
  }

  async getUserByUsername(username: string): Promise<UserModel | null> {
    const data = (await this.knex("users")
      .select("*")
      .where("username", "=", username)
      .first()) as UserDBReturn | undefined;

    if (!data) return null;

    const { id, ...props } = data;
    return UserModel.createUser(props, id);
  }

  async insertUser(data: UserProps): Promise<UserModel> {
    const user = UserModel.createUser(data);
    await this.knex("users").insert(user);
    return user;
  }

  async updateUser(data: UserProps, id: string): Promise<UserModel> {
    await this.knex("users").update(data).where("id", "=", id);
    return UserModel.createUser(data, id);
  }

  async deleteUser(id: string): Promise<boolean> {
    await this.knex("users").del().where("id", "=", id);
    return true;
  }
}
