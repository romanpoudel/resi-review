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
    table.bigInteger("house_id").primary().notNullable();
    table.string("location").notNullable();
    table.string("image_url").nullable();
    table.bigInteger("rating").notNullable();
    table.string("price").notNullable();
    table.string("contact").nullable();
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
