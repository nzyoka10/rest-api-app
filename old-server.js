// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// app middleware
app.use(bodyParser.json());

// database connection to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// product route
app.use("/products", require("./routes/products"));

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
