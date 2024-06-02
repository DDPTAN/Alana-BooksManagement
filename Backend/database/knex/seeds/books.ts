import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("books").del();

  // Inserts seed entries
  await knex("books").insert([
    {
      title: "Tutorial S3 tanpa bisa ngoding~",
      genre: "tutorial",
      publisher: "Coder Academy",
      author: "Alana",
      book_number: "001",
      publication_date: "2022-01-01",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}
