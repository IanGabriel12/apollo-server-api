import IRoleDataSource from "./interfaces/IRoleDataSource";
import IUserDataSource from "./interfaces/IUserDataSource";

export type ContextType = {
  dataSources: DataSourcesType;
  user_id: string | null;
  hasAdminPermissions: boolean;
  hasRegionalPermissions: boolean;
  hasComercialPermissions: boolean;
};

export type DataSourcesType = {
  roles: IRoleDataSource;
  users: IUserDataSource;
};

export type TokenPayload = {
  id: string;
  role_id: string;
};
