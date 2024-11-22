const Action = require('./Actions');

exports.addAction = async (req, res) => {
  try {
    const action = new Action(req.body);
    await action.save();
    res.status(201).json(action);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getActions = async (req, res) => {
  try {
    const actions = await Action.find({ user: req.user.id });
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
