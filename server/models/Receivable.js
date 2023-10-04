const mongoose = require('mongoose');

const receivableSchema = new mongoose.Schema({
  rateName: String,
  invoiceDescr: String,
  rate: Number,
  unit: String,
  amount: Number,
  actions: String,
});

module.exports = mongoose.model('Receivable', receivableSchema);
