exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("toppings")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("toppings").insert([
        {
          id: 1,
          name: "salt",
          price: 1,
          donut_id: 1
        },
        {
          id: 2,
          name: "pepper",
          price: 1,
          donut_id: 2
        },
        {
          id: 3,
          name: "garlic",
          price: 1,
          donut_id: 3
        }
      ]);
    });
};
