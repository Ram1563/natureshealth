const Payable = require('../models/Payable');

// Create a new payable
exports.create = async (req, res) => {
  const { payableDescr, rate, unit, amount, truck, ptDate, actions } = req.body;
  const newPayable = new Payable({
    payableDescr,
    rate,
    unit,
    amount,
    truck,
    ptDate,
    actions,
  });

  try {
    const payable = await newPayable.save();
    res.status(201).send(payable);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

// Get all payables
exports.getAll = async (req, res) => {
  try {
    const payables = await Payable.find().exec();
    res.status(200).send(payables);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

// Add other controller methods as needed
