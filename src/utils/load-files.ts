import { loadSchema } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { mergeResolvers } from "@graphql-tools/merge";
import { loadFiles } from "@graphql-tools/load-files";
import { DataSourcesType } from "../types";
import KnexRoleDataSource from "../datasources/KnexRoleDataSource";
import KnexUserDataSource from "../datasources/KnexUserDataSource";

function loadTypeDefs() {
  return loadSchema("./src/modules/**/*.graphql", {
    loaders: [new GraphQLFileLoader()],
  });
}

function loadResolvers() {
  const loadMutationFiles = loadFiles(
    "./src/modules/**/mutations/index.{ts,js}"
  );

  const loadQueryFiles = loadFiles("./src/modules/**/queries/index.{ts,js}");

  const loadTypeFiles = loadFiles("./src/modules/**/types/index.{ts,js}");

  return Promise.all([loadMutationFiles, loadQueryFiles, loadTypeFiles]).then(
    ([mutationFiles, queryFiles, typeFiles]) => {
      return mergeResolvers([...mutationFiles, ...queryFiles, ...typeFiles]);
    }
  );
}

function loadDataSources(): () => DataSourcesType {
  return () => ({
    roles: new KnexRoleDataSource(),
    users: new KnexUserDataSource(),
  });
}

export default async function loadEverything() {
  return Promise.all([loadTypeDefs(), loadResolvers(), loadDataSources()]);
}
