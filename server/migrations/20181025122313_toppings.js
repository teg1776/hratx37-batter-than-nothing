exports.up = function(knex, Promise) {
  return knex.schema.createTable("toppings", function(table) {
    table.increments();
    table.string("name");
    table.float("price");
    table
      .integer("donut_id")
      .references("id")
      .inTable("donuts");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("toppings");
};
