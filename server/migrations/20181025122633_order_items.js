exports.up = function(knex, Promise) {
  return knex.schema.createTable("order_items", function(table) {
    table.increments();
    table
      .integer("donut_id")
      .references("id")
      .inTable("donuts");
    table.integer("quantity");
    table
      .integer("order_id")
      .references("id")
      .inTable("orders");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("order_items");
};
