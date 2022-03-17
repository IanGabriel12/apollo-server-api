import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("roles", (table) => {
    table.string("id").primary().notNullable();
    table.string("name").notNullable();
    table.string("slug").notNullable().unique();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("roles");
}
