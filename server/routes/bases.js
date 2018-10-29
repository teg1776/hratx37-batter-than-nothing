const router = require("express").Router();
const knex = require("../db/knex");

router.get("/", (req, res) => {
  knex("donut_bases").then(bases => {
    res.send(bases);
  });
});

module.exports = router;
