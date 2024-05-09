const { Sequelize } = require('sequelize');
const { sequelize } = require('../server');


// Define the Product model
const Product = sequelize.define('Product', {
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

// Export the sequelize object
module.exports = { sequelize, Product };
// module.exports = Product;
