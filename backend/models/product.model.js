const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: Number, required: true },
  promoPrice: { type: Number },
  subtitle: { type: String, required: true },
  country: { type: String, required: true },
  region: { type: String, required: true },
  material: { type: String, required: true },
  type: { type: String, required: true },
  purpose: { type: String, required: true },
  taste: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
