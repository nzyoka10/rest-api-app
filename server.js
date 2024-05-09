// server.js
const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Database connection to MySQL
const sequelize = new Sequelize("rest-db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// Testing the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to MySQL database.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Define the Product model
const Product = sequelize.define("Product", {
  // Define your product attributes here
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

// Synchronize the model with the database
sequelize.sync().then(() => {
  console.log("Product model synchronized with database.");
});

// Product route
app.use("/products", require("./routes/product"));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
