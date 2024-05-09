const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

// Define the Product model
const Product = sequelize.define('Product', {
  // Define your product attributes here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Product;
