import { Knex } from "knex";

const TABLE_NAME = "reviews";


/**
 * Create table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id").primary();
    table.integer("house_id").unsigned().references("id").inTable("houses").onDelete("CASCADE").notNullable();
    table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE").notNullable();
    table.boolean("anonymous").notNullable().defaultTo(false);
    table.integer("price").nullable();
    table.integer("rating").notNullable().defaultTo(0);
    table.string("review").notNullable();
    table.boolean("owner").notNullable().defaultTo(false);
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