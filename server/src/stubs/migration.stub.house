import { Knex } from "knex";

const TABLE_NAME = "houses";


/**
 * Create table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id").primary();
    table.string("housenumber").notNullable();
    table.string("houseimage").notNullable();
    table.string("location").notNullable();
    table.string("locationimage").nullable();
    table.bigInteger("rating").nullable();
    table.string("price").nullable();
    table.string("contact").nullable();
    table.enu("category", ["room", "flat","house"]).defaultTo("room");
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