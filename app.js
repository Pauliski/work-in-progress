import Express from "express";
import Products  from './products';
// const Products = require('./products')

const app = Express();
const port = 3001;

app.get("/", (req, res) => {
  // res.send("Helllo World")
  res.json(Products);
});

app.listen(port, () => console.log(`listening on port: ${port}`));
