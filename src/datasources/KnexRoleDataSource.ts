import IRoleDataSource from "../interfaces/IRoleDataSource";
import { RoleModel, RoleProps } from "../models/Role";
import KnexDataSource from "../utils/KnexDataSource";

export default class KnexRoleDataSource
  extends KnexDataSource
  implements IRoleDataSource
{
  async listRoles() {
    const roleData = await this.knex("roles").select("*");
    const roles = roleData.map((props) => RoleModel.createRole(props));
    return roles;
  }

  async getRole(id: string) {
    const roleData = await this.knex("roles")
      .select("*")
      .where("id", "=", id)
      .first();
    const role = RoleModel.createRole(roleData);
    return role;
  }

  async insertRole(data: RoleProps) {
    const role = RoleModel.createRole(data);
    await this.knex("roles").insert(role);
    return role;
  }

  async updateRole(data: RoleProps, id: string) {
    const updatedRole = RoleModel.createRole(data, id);

    await this.knex("roles").update(updatedRole).where("id", "=", id);
    return updatedRole;
  }

  async deleteRole(id: string): Promise<boolean> {
    await this.knex("roles").delete().where("id", "=", id);
    return true;
  }
}
