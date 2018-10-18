
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donut_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('donut_types').insert([
        {id: 1,type: 'glazed'},
        {id: 3,type: 'blueberry'},
        {id: 2,type: 'maple'},
        {id: 4,type: 'chocolate'},
      ]);
    });
};
