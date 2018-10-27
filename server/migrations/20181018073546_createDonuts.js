exports.up = function(knex, Promise) {
  return knex.schema.createTable("donuts", function(table) {
    table.increments();
    table.string("name");
    table.string("description");
    table.float("price");
    table.string("image");
    table
      .integer("donut_type_id")
      .references("id")
      .inTable("donut_types");
    table
      .integer("donut_base_id")
      .references("id")
      .inTable("donut_bases");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("donuts");
};
