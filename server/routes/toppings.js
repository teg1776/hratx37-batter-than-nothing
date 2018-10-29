const router = require("express").Router();
const knex = require("../db/knex");

router.get("/", (req, res) => {
  knex("toppings").then(toppings => {
    res.send(toppings);
  });
});

module.exports = router;
