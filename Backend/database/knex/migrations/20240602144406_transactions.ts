import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("transactions", function (table) {
        table.increments("id").primary().notNullable();
        table.integer("borrowing_id").unsigned().notNullable();
        table.integer("book_id").unsigned().notNullable();
        table.integer("user_id").unsigned().notNullable();
        table.string("trans_date").notNullable();
        table.string("status").defaultTo("borrowed").notNullable();
        table.foreign("borrowing_id").references("id").inTable("borrowings").onDelete("CASCADE");
        table.foreign("book_id").references("id").inTable("books").onDelete("CASCADE");
        table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");

        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("transactions");
}

