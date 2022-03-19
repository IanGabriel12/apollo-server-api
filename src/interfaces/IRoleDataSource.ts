import { SQLDataSource } from "datasource-sql";
import { RoleModel, RoleProps } from "../models/Role";

export default interface IRoleDataSource extends SQLDataSource {
  listRoles(): Promise<RoleModel[]>;
  getRole(id: string): Promise<RoleModel | null>;
  insertRole(data: RoleProps): Promise<RoleModel>;
  updateRole(data: RoleProps, id: string): Promise<RoleModel>;
  deleteRole(id: string): Promise<boolean>;
}
