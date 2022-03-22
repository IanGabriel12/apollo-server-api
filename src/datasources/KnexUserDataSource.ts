import IUserDataSource from "../interfaces/IUserDataSource";
import { UserModel, UserProps } from "../models/User";
import KnexDataSource from "../utils/KnexDataSource";

export default class KnexUserDataSource
  extends KnexDataSource
  implements IUserDataSource
{
  async getUser(id: string): Promise<UserModel | null> {
    const userData = (await this.knex("users")
      .select("*")
      .where("id", "=", id)
      .first()) as UserProps;
    return UserModel.createUser(userData);
  }

  async getUserByUsername(username: string): Promise<UserModel | null> {
    const userData = (await this.knex("users")
      .select("*")
      .where("username", "=", username)
      .first()) as UserProps | undefined;
    return userData ? UserModel.createUser(userData) : null;
  }

  async insertUser(data: UserProps): Promise<UserModel> {
    console.log(data);
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
