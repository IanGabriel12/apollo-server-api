import { RoleModel, RoleProps } from "../models/Role";

export default interface IRoleDataSource {
  listRoles(): RoleModel[];
  getRole(id: string): RoleModel | null;
  insertRole(data: RoleProps): RoleModel;
  updateRole(id: string, data: RoleProps): RoleModel;
}
