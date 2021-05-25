import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("articles", (table) => {
        table.increments("id");
        table.string("title", 255);
        table.text("content");
        table.string("author", 255);
        table.string("image_url", 255)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('articles');
}

