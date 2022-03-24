import { Knex } from "knex";
import { ADMIN_ROLE } from "../constants/roles";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

export async function seed(knex: Knex): Promise<void> {
  const ADMIN_ID = "kahsdfgash86asdfag87";
  // Deletes ALL existing entries
  await knex("users").del().where("id", "=", ADMIN_ID);

  const hashPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD!, 10);

  // Inserts seed entries
  await knex("users").insert([
    {
      id: ADMIN_ID,
      name: "Administrador",
      username: process.env.ADMIN_USERNAME!,
      password: hashPassword,
      email: "admin@admin.com.br",
      role_id: ADMIN_ROLE,
    },
  ]);
}
