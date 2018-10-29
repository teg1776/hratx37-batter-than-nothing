exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("order_items")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("order_items").insert([
        {
          id: 1,
          donut_id: 1,
          order_id: 1
        },
        {
          id: 2,
          donut_id: 2,
          order_id: 2
        },
        {
          id: 3,
          donut_id: 3,
          order_id: 3
        }
      ]);
    });
};
