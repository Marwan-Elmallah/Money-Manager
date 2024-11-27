const Action = require("./Actions");

exports.addAction = async (req, res) => {
  try {
    const { type, amount, category, description } = req.body;
    const action = new Action({
      type,
      amount,
      category,
      description,
      user: req.user.id,
    });
    await action.save();
    res.status(201).json(action);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getActions = async (req, res) => {
  try {
    const actions = await Action.find({ user: req.user.id });
    res.json(actions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};