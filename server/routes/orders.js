const router = require("express").Router();
const knex = require("../db/knex");

router.get("/", (req, res) => {
  knex("orders").then(orders => {
    res.send(orders);
  });
});

module.exports = router;
