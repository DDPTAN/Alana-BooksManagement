import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("borrowings", function (table) {
        table.increments("id").primary().notNullable();
        table.integer("book_id").unsigned().notNullable();
        table.integer("user_id").unsigned().notNullable();
        table.string("date_borrowed").notNullable();
        table.string("date_returned").nullable();
        table.foreign("book_id").references("id").inTable("books").onDelete("CASCADE");
        table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");

        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("borrowings");
}

