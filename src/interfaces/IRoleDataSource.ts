import { RoleModel, RoleProps } from "../models/Role";

export default interface IRoleDataSource {
  listRoles(): Promise<RoleModel[]>;
  getRole(id: string): Promise<RoleModel | null>;
  insertRole(data: RoleProps): Promise<RoleModel>;
  updateRole(id: string, data: RoleProps): Promise<RoleModel>;
  deleteRole(id: string): Promise<boolean>;
}
