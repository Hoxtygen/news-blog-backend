import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { id: 1, firstName: "Wasiu", lastName: "Adeniyi", email: "hoxtygen@live.com", role: "super_admin", password: "12345678" },
        { id: 2, firstName: "Margarita", lastName: "De Santis", email: "margarita@live.com", role: "author", password: "12345678" },
        { id: 3, firstName: "Angelino", lastName: "Areola", email: "areola@live.com", role: "editory", password: "12345678" },
       
    ]);
};
