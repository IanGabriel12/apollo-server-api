import { DataSource } from "apollo-datasource";
import IRoleDataSource from "../interfaces/IRoleDataSource";
import { RoleModel, RoleProps } from "../models/Role";

const roles: RoleModel[] = [
  RoleModel.createRole({ name: "Administrador" }),
  RoleModel.createRole({ name: "Trabalhador" }),
  RoleModel.createRole({ name: "Regional" }),
  RoleModel.createRole({ name: "Comercial" }),
];

export default class RoleDataSource
  extends DataSource
  implements IRoleDataSource
{
  constructor() {
    super();
  }

  async listRoles() {
    return roles;
  }

  async getRole(id: string) {
    return roles.find((role) => role.id === id) || null;
  }

  async insertRole(data: RoleProps) {
    const newRole = RoleModel.createRole(data);
    roles.push(newRole);
    return newRole;
  }

  async updateRole(id: string, data: RoleProps) {
    const updatedRole = RoleModel.createRole({
      id,
      name: data.name,
    });

    const index = roles.findIndex((role) => role.id === id);
    roles[index] = updatedRole;
    return roles[index];
  }

  async deleteRole(id: string) {
    const index = roles.findIndex((role) => role.id === id);
    roles.splice(index, 1);
    return true;
  }
}
