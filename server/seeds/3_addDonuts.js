exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("donuts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("donuts").insert([
        {
          name: "Doughrothy",
          description: "This is an example description of this donut ",
          image:
            "https://mbtskoudsalg.com/images/doughnut-transparent-galaxy-3.png",
          price: 1,
          donut_type_id: 1,
          donut_base_id: 1
        },
        {
          name: "Donut Delight",
          description: "This is an example description of this donut ",
          image:
            "http://dunkindonuts.com.sg/wp-content/uploads/2015/10/07_AlmondWhiteChoc_edit-300x300.png",
          price: 3,
          donut_type_id: 2,
          donut_base_id: 2
        },
        {
          name: "Maples",
          description: "This is an example description of this donut ",
          image: "https://ubisafe.org/images/donut-transparent-delicious-2.png",
          price: 2,
          donut_type_id: 2,
          donut_base_id: 1
        }
      ]);
    });
};
