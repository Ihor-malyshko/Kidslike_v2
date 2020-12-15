const { HabitModel } = require("./habits.model");

exports.createHabit = async (req, res, next) => {
  const newHabit = await HabitModel.create(req.body);
  console.log(newHabit);
  return res.status(201).send(newHabit);
};

exports.getHabits = async (req, res, next) => {
  const { childId} = req.user;
  const habits = await HabitModel.find({ childId: childId });
  // const { childId } = req.user;
  // const habits = await HabitModel.find({ childId: childId  });
  return res.status(200).send(habits);
};

// exports.getHabitById = async (req, res, next) => {
//   return res.status(200).send(req.hebit);
// };

exports.updateHabit = async (req, res, next) => {
  const { _id } = req.habit;
  const updatedHabit = await HabitModel.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  return res.status(200).send(updatedHabit);
};

exports.checkHabitDone = async (req, res, next) => {
  const { _id } = req.habit;
  const habitToCheck = await HabitModel.findOneAndUpdate({ _id, 'daysToComplete.date': req.body.date },
    { $set: { 'daysToComplete.$.done': req.body.done } }, {
    new: true,
  });
  return res.status(200).send(habitToCheck);
};

exports.deleteHabit = async (req, res, next) => {
  const { _id } = req.habit;
  await HabitModel.findByIdAndDelete(_id);

  return res.status(204).send(_id);
};
