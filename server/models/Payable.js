const mongoose = require('mongoose');

const payableSchema = new mongoose.Schema({
  payableDescr: String,
  rate: Number,
  unit: String,
  amount: Number,
  truck: String,
  ptDate: Date,
  actions: String,
});

module.exports = mongoose.model('Payable', payableSchema);
