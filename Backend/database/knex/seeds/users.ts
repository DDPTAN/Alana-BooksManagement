import { Knex } from "knex";
import bcrypt from "bcrypt";

export async function seed(knex: Knex): Promise<void> {
    const SALT = bcrypt.genSaltSync(5);
    const password = bcrypt.hashSync("pakjo123", SALT);
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        {
            username: "alana",
            email: "alana@yahoo.com",
            password: password,
            gender: "male",
            age: "23",
            contact: "081273532695",
            role: "superadmin",
            created_at: new Date(),
            updated_at: new Date(),
        },
    ]);
}
