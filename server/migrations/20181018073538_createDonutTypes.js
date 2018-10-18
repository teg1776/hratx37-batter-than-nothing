exports.up = function (knex, Promise) {
    return knex.schema.createTable('donut_types', function (table) {
        table.increments();
        table.string('type');
        table.timestamps(true, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('donut_types');
};
