import type { Knex } from "knex";

// Update with your config settings.

const config: Knex.Config = {
  client: "mysql",
  connection: {
    database: "graphql",
    user: "root",
    password: "toor",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: "./src/migrations",
    tableName: "knex_migrations",
  },
};

module.exports = config;
