import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("articles", (table) => {
        table.increments("id");
        table.string("title", 255).notNullable();
        table.text("content").notNullable();
        table.integer("author_id").references("id").inTable('users');
        table.string("image_url", 255).notNullable();
        table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('articles');
}
