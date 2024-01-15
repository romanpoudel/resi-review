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
          housenumber: 122,
          houseimage: "https://res.cloudinary.com/duoo5gqdq/image/upload/v1705128007/cld-sample-3.jpg",
          location: "kathmandu",
          locationimage:"https://res.cloudinary.com/duoo5gqdq/image/upload/v1705127968/sample.jpg",
          price:"1234123412",
          contact:"1234123412",
          category:"room",
        },
        {
          housenumber: 124,
          houseimage: "https://res.cloudinary.com/duoo5gqdq/image/upload/v1705128007/cld-sample-3.jpg",
          location: "lalitpur",
          locationimage:"https://res.cloudinary.com/duoo5gqdq/image/upload/v1705127968/sample.jpg",
          price:"1234123412",
          contact:"1234123412",
          category:"flat",
        },
        {
          housenumber: 132,
          houseimage: "https://res.cloudinary.com/duoo5gqdq/image/upload/v1705128006/cld-sample.jpg",
          location: "Bhaktapur",
          locationimage:"https://res.cloudinary.com/duoo5gqdq/image/upload/v1705127968/sample.jpg",
          price:"1234123412",
          contact:"1234123412",
          category:"house",
        },
        {
          housenumber: 112,
          houseimage: "https://res.cloudinary.com/duoo5gqdq/image/upload/v1705128006/cld-sample.jpg",
          location: "Jagati",
          locationimage:"https://res.cloudinary.com/duoo5gqdq/image/upload/v1705127968/sample.jpg",
          price:"1234123412",
          contact:"1234123412",
          category:"room",
        },
        {
          housenumber: 442,
          houseimage: "https://res.cloudinary.com/duoo5gqdq/image/upload/v1705128006/cld-sample.jpg",
          location: "London",
          locationimage:"https://res.cloudinary.com/duoo5gqdq/image/upload/v1705127968/sample.jpg",
          price:"1234123412",
          contact:"1234123412",
          category:"flat",
        },
        {
          housenumber: 232,
          houseimage: "https://res.cloudinary.com/duoo5gqdq/image/upload/v1705128006/cld-sample.jpg",
          location: "Paris",
          locationimage:"https://res.cloudinary.com/duoo5gqdq/image/upload/v1705127968/sample.jpg",
          price:"1234123412",
          contact:"1234123412",
          category:"room",
        },
        {
          housenumber: 1322,
          houseimage: "https://res.cloudinary.com/duoo5gqdq/image/upload/v1705128006/cld-sample.jpg",
          location: "Ottawa",
          locationimage:"https://res.cloudinary.com/duoo5gqdq/image/upload/v1705127968/sample.jpg",
          price:"1234123412",
          contact:"1234123412",
          category:"house",
        }
      ]);
    });
}