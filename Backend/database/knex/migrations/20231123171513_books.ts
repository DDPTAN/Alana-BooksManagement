import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("books", function (table) {
    table.increments("id").primary().notNullable();
    table.string("title").notNullable();
    table.string("genre").notNullable();
    table.string("publisher").notNullable();
    table.string("author").notNullable();
    table.string("book_number").notNullable();
    table.string("publication_date").notNullable();
    table.string("status").defaultTo("available");
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("books");
}
