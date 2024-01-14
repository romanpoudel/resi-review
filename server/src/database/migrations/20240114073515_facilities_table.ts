import { Knex } from "knex";

const TABLE_NAME = "facilties";


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
    table.boolean("24/7water").defaultTo(false);
    table.boolean("direct_sunlight").defaultTo(false);
    table.boolean("separate_washroom").defaultTo(false);
    table.boolean("wifi").defaultTo(false);
    table.boolean("furniture").defaultTo(false);
    table.boolean("rooftop_access").defaultTo(false);
    table.boolean("24/7access").defaultTo(false);
    table.boolean("parking").defaultTo(false);
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