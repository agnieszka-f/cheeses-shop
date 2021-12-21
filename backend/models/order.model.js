/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  sum: { type: Number, required: true },
  sumTotal: { type: Number, required: true },
  delivery: { type: Number, required: true },
  city: { type: String, required: true },
  postCode: { type: String, required: true },
  street: { type: String, required: true },
  nrHouse: { type: String, required: true },
  nrFlat: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  moreInfo: { type: String },
  productsId: {type: Array,required: true },
});

module.exports = mongoose.model('Order', orderSchema);