import crypto from "crypto";

export type UserProps = {
  username: string;
  password: string;
  name: string;
  email: string;
  role_id: string;
};

export class UserModel {
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
  role_id: string;

  constructor(props: UserProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.username = props.username;
    this.password = props.password;
    this.name = props.name;
    this.email = props.email;
    this.role_id = props.role_id;
  }

  static createUser(props: UserProps, id?: string) {
    const user = new UserModel(props, id);
    return user;
  }
}
