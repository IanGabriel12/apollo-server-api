import IRoleDataSource from "./interfaces/IRoleDataSource";
import IUserDataSource from "./interfaces/IUserDataSource";

export type ContextType = {
  dataSources: DataSourcesType;
};

export type DataSourcesType = {
  roles: IRoleDataSource;
  users: IUserDataSource;
};

export type TokenPayload = {
  id: string;
  role_id: string;
};
