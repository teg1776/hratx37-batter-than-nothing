
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donut_bases').del()
    .then(function () {
      // Inserts seed entries
      return knex('donut_bases').insert([
        {id: 1, base: 'cake'},
        {id: 3, base: 'old fashion'},
        {id: 2, base: 'yeast'},
      ]);
    });
};
