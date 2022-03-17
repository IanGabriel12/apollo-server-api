import crypto from "crypto";

export type RoleProps = {
  id?: string;
  name: string;
};

export class RoleModel {
  id: string;
  name: string;
  slug: string;

  private constructor(props: RoleProps) {
    this.id = props.id || crypto.randomUUID();
    this.name = props.name;
    this.slug = props.name.toLowerCase();
  }

  static createRole(props: RoleProps) {
    const role = new RoleModel(props);
    return role;
  }
}
