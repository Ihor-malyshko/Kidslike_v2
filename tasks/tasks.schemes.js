const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.createTaskSchema = Joi.object({
  name: Joi.string().required(),
  points: Joi.number().required(),
  isCompleted: Joi.boolean(),
  daysToComplete: Joi.number(),
  childId: Joi.objectId().required(),
});

exports.updateTaskSchema = Joi.object({
  name: Joi.string(),
  points: Joi.number(),
  isCompleted: Joi.boolean(),
  daysToComplete: Joi.number(),
  childId: Joi.objectId(),
}).min(1);

exports.validateIdSchema = Joi.object({
  id: Joi.objectId(),
});
