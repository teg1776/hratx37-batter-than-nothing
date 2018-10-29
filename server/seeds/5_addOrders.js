exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("orders")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("orders").insert([
        {
          id: 1,
          customer_name: "Nick"
        },
        {
          id: 2,
          customer_name: "Zubair"
        },
        {
          id: 3,
          customer_name: "Lindin"
        }
      ]);
    });
};
