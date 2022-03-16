import RoleDataSource from "./datasources/RoleDatasource";

export type ContextType = {
  dataSources: DataSourcesType;
};

export type DataSourcesType = {
  roles: RoleDataSource;
};
