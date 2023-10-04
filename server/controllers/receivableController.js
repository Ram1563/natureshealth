const Receivable = require('../models/Receivable');

// Create a new receivable
exports.create = async (req, res) => {
  const { rateName, invoiceDescr, rate, unit, amount, actions } = req.body;
  const newReceivable = new Receivable({
    rateName,
    invoiceDescr,
    rate,
    unit,
    amount,
    actions,
  });

  try {
    const receivable = await newReceivable.save();
    res.status(201).send(receivable);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

// Get all receivables
exports.getAll = async (req, res) => {
  try {
    const receivables = await Receivable.find().exec();
    res.status(200).send(receivables);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

// Add other controller methods as needed
