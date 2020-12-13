const { HabitModel } = require("./habits.model");

exports.createHabit = async (req, res, next) => {
  const newHabit = await HabitModel.create(req.body);
  return res.status(201).send(newHabit);
};

exports.getHabits = async (req, res, next) => {
  console.log(req.body);
  console.log(req.user);
  console.log(Object.keys(req));
  // console.log(req.user);
  const { children } = req.user;
  const habits = await HabitModel.find({ childId: children });
  // const { childrenId } = req.user;
  // const habits = await HabitModel.find({ childId: childrenId  });
  return res.status(200).send(habits);
};

// exports.getHabitById = async (req, res, next) => {
//   const { id } = req.habit;
//   return res.status(200).send(req.habit);
// };

exports.updateHabit = async (req, res, next) => {
  const { id } = req.habit;
  const updatedHabit = await HabitModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  return res.status(200).send(updatedHabit);
};

exports.deleteHabit = async (req, res, next) => {
  const { id } = req.habit;

  await HabitModel.findByIdAndDelete(id);

  return res.status(204).send();
};
