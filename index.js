console.log("Hello CodeSandbox");
const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const db = require("./database");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/products", productRoutes);

db.sync()
  .then(() => {
    console.log("Database connected successfully.");
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
