const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const income = IncomeSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    // validations
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All field are required." });
    }
    if (amount <= 0) {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number." });
    }
    await income.save();
    res.status(200).json({ message: "Income added!" });
  } catch (error) {}

  console.log(income);
};
