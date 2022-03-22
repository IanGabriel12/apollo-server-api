import { SQLDataSource } from "datasource-sql";
import { UserModel, UserProps } from "../models/User";

export default interface IUserDataSource extends SQLDataSource {
  getUser(id: string): Promise<UserModel | null>;
  getUserByUsername(username: string): Promise<UserModel | null>;
  insertUser(data: UserProps): Promise<UserModel>;
  updateUser(data: UserProps, id: string): Promise<UserModel>;
  deleteUser(id: string): Promise<boolean>;
}
