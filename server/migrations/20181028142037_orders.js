exports.up = function(knex, Promise) {
  return knex.schema.createTable("orders", function(table) {
    table.increments();
    table.string("customer_name");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("orders");
};
