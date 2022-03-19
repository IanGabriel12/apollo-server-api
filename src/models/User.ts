import { Role } from "../schema-types";
import crypto from "crypto";

export type UserProps = {
  username: string;
  password: string;
  name: string;
  email: string;
  role: Role;
};

export class User {
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
  role: Role;

  constructor(props: UserProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.username = props.username;
    this.password = props.password;
    this.name = props.name;
    this.email = props.email;
    this.role = props.role;
  }

  static createUser(props: UserProps, id?: string) {
    const user = new User(props, id);
    return user;
  }
}
