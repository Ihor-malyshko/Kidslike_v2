const { TaskModel } = require("./tasks.model");

exports.createTask = async (req, res, next) => {
  const newTask = await TaskModel.create(req.body);
  return res.status(201).send(newTask);
};

exports.getTasks = async (req, res, next) => {
  const { childId } = req.user;
  const usersTasks = await TaskModel.find({
    
    childId: childId.map((el) => el),
  });
  return res.status(200).send(usersTasks);
};

exports.getTaskById = async (req, res, next) => {
  return res.status(200).send(req.task);
};

exports.updateTask = async (req, res, next) => {
  const { _id } = req.task;
  const updatedtask = await TaskModel.findByIdAndUpdate(_id, req.body, {
    new: true,
  });

  return res.status(200).send(updatedtask);
};

exports.deleteTask = async (req, res, next) => {
  const { _id } = req.task;
  await TaskModel.findByIdAndDelete(_id);
  return res.status(204).send();
};
