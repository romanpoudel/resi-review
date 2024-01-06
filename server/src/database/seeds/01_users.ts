import { Knex } from "knex";

const TABLE_NAME = "users";

/**
 * Delete existing entries and seed values for table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          username: "roman",
          email: "roman@gmail.com",
          password: "rowValue@123",
          refresh_token: "",
          image_url: "rowValue",
        },
        {
          username: "rojan",
          email: "rojan@gmail.com",
          password: "rowValue@123",
          refresh_token: "",
          image_url: "rowValue",
        },
        {
          username: "lukaku",
          email: "lukaku@gmail.com",
          password: "rowValue@123",
          refresh_token: "",
          image_url: "rowValue",
        }
      ]);
    });
}