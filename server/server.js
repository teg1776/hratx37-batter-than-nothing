const { donutText, art } = require("../donuts"); // very important

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const morgan = require("morgan");

app.use((req, res, next) => {
  const messages = [
    `--New Request:--\n`,
    `${req.method} ${req.url}\n`,
    `params: ${JSON.stringify(req.params)}\n`,
    `body: ${req.body}\n`
  ].join("");
  next();
});

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// set api routes
const { donuts } = require("./routes");
console.log("WHAT IS DONUTES:", donuts);
app.use("/api/donuts", donuts);

const { toppings } = require("./routes");
console.log("WHAT IS TOPPINGS:", toppings);
app.use("/api/toppings", toppings);

const { orders } = require("./routes");
console.log("WHAT IS ORDERS:", orders);
app.use("/api/orders", orders);

const { bases } = require("./routes");
console.log("WHAT IS BASES:", bases);
app.use("/api/bases", bases);

const { types } = require("./routes");
console.log("WHAT IS TYPES:", types);
app.use("/api/types", types);

app.listen(PORT, () => {
  console.log("booyah", art, donutText, `\t listening on port ${PORT}`);
});
