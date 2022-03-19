import IRoleDataSource from "./interfaces/IRoleDataSource";

export type ContextType = {
  dataSources: DataSourcesType;
};

export type DataSourcesType = {
  roles: IRoleDataSource;
};
