import type { Knex } from "knex";
import dotenv from "dotenv";
dotenv.config();

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
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
      extension: "ts",
    },
    seeds: {
      directory: "./src/seeds",
      timestampFilenamePrefix: true,
      extension: "ts",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      host: process.env.PROD_DATABASE_HOST,
      port: Number(process.env.PROD_DATABASE_PORT),
      database: process.env.PROD_DATABASE_NAME,
      user: process.env.PROD_DATABASE_USER,
      password: process.env.PROD_DATABASE_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./build/src/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./build/src/seeds",
    },
  },
};

module.exports = config;
