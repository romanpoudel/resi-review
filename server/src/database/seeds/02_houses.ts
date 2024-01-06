import { Knex } from "knex";

const TABLE_NAME = "houses";

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
          house_id: 122,
          location: "kathmandu",
          rating: "3",
          price:"Rs 233",
          contact:"1234123412",
        },
        {
          house_id: 111,
          location: "Thamel",
          rating: "4",
          price:"Rs 233",
          contact:"1232323412",
        },
        {
          house_id: 143,
          location: "Gaidakot",
          rating: "4",
          price:"Rs 233",
          contact:"1234123412",
        }
      ]);
    });
}