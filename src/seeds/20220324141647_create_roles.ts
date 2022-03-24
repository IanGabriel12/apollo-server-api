import { Knex } from "knex";
import * as ROLE_CONSTANTS from "../constants/roles";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("roles").del();

  // Inserts seed entries
  await knex("roles").insert([
    {
      id: ROLE_CONSTANTS.ADMIN_ROLE,
      name: ROLE_CONSTANTS.ADMIN_ROLE,
      slug: ROLE_CONSTANTS.ADMIN_ROLE,
    },
    {
      id: ROLE_CONSTANTS.NORMAL_ROLE,
      name: ROLE_CONSTANTS.NORMAL_ROLE,
      slug: ROLE_CONSTANTS.NORMAL_ROLE,
    },
  ]);
}
