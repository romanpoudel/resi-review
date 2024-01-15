import { Knex } from "knex";

const TABLE_NAME = "reviews";

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
          house_id: 40,
          user_id: 11,
          anonymous: true,
          price: 23412,
          rating: 3,
          review: "sadfsadfdasgsdag",
          owner: true,
          likes: 50,
        },
        {
          house_id: 40,
          user_id: 12,
          anonymous: true,
          price: 23412,
          rating: 5,
          review: "sdavdsace",
          owner: true,
          likes: 50,
        },
        {
          house_id: 41,
          user_id: 11,
          anonymous: true,
          price: 23412,
          rating: 5,
          review: "sadgadfvd",
          owner: true,
          likes: 50,
        },
        {
          house_id: 42,
          user_id: 13,
          anonymous: true,
          price: 23412,
          rating: 4,
          review: "sdagvxcv",
          owner: true,
          likes: 50,
        },
        {
          house_id: 43,
          user_id: 12,
          anonymous: true,
          price: 23412,
          rating: 4,
          review: "sdagvxcv",
          owner: true,
          likes: 50,
        }
      ]);
    });
}
