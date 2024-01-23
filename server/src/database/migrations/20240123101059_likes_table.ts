import { Knex } from "knex";

const TABLE_NAME = "likes";


/**
 * Create table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id").primary();
    table.integer("review_id").unsigned().references("id").inTable("reviews").onDelete("CASCADE").notNullable();
    table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE").notNullable();
    table.timestamps(true, true);
  });
}

/**
 * Drop table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}