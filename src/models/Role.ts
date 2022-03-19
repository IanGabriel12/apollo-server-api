import crypto from "crypto";

export type RoleProps = {
  name: string;
};

export class RoleModel {
  id: string;
  name: string;
  slug: string;

  private constructor(props: RoleProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.name = props.name;
    this.slug = props.name.toLowerCase();
  }

  static createRole(props: RoleProps, id?: string) {
    const role = new RoleModel(props, id);
    return role;
  }
}
