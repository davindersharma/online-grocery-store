const mongoose = require("mongoose");

const Cart = new mongoose.Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  total: {
    type: Number,
  },
});

module.exports = Cart;
