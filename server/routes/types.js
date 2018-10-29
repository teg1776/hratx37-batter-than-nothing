const router = require("express").Router();
const knex = require("../db/knex");

router.get("/", (req, res) => {
  knex("donut_types").then(types => {
    res.send(types);
  });
});

module.exports = router;
