import { loadSchema } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { mergeResolvers } from "@graphql-tools/merge";
import { loadFiles } from "@graphql-tools/load-files";
import { DataSourcesType } from "../types";
import KnexRoleDataSource from "../datasources/KnexRoleDataSource";

function loadTypeDefs() {
  return loadSchema("./src/modules/**/*.graphql", {
    loaders: [new GraphQLFileLoader()],
  });
}

function loadResolvers() {
  const loadMutationFiles = loadFiles("./src/modules/**/mutations/index.ts");

  const loadQueryFiles = loadFiles("./src/modules/**/queries/index.ts");

  return Promise.all([loadMutationFiles, loadQueryFiles]).then(
    ([mutationFiles, queryFiles]) => {
      return mergeResolvers([...mutationFiles, ...queryFiles]);
    }
  );
}

function loadDataSources(): () => DataSourcesType {
  return () => ({
    roles: new KnexRoleDataSource(),
  });
}

export default async function loadEverything() {
  return Promise.all([loadTypeDefs(), loadResolvers(), loadDataSources()]);
}
