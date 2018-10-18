
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donuts').del()
    .then(function () {
      // Inserts seed entries
      return knex('donuts').insert([
        { name: 'Doughrothy', description: 'This is an example description of this donut ', donut_type_id: 1, donut_base_id: 1},
        { name: 'Donut Delight', description: 'This is an example description of this donut ', donut_type_id: 2, donut_base_id: 2},
        { name: 'Maples', description: 'This is an example description of this donut ', donut_type_id: 2, donut_base_id: 1},
      ]);
    });
};
