import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.string("id").primary().notNullable();
    table.string("username").notNullable().unique();
    table.string("password").notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("role_id").notNullable();
    table
      .foreign("role_id", "users_role_key")
      .references("roles.id")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
