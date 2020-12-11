const { Router } = require("express");
const {
  createHabit,
  getHabits,
  getHabitById,
  updateHabit,
  deleteHabit,
} = require("./habits.controller");
const { validate } = require("../helpers/validate");
const { CreateHabitSchema, UpdateHabitSchema, validateIdSchema } = require("./habits.schemes");
const { asyncWrapper } = require("../helpers/wrapper_Try_Catch");
const { authorize } = require("../helpers/auth/token_verify");


const router = Router();

// CRUD

// 1. C - Create
router.post("/", authorize, validate(CreateHabitSchema), asyncWrapper(createHabit));

// 2. R - Read
router.get("/", asyncWrapper(getHabits));
router.get("/:id", asyncWrapper(getHabitById));

// // 3. U - Update
router.patch("/:id", authorize, validate(UpdateHabitSchema), asyncWrapper(updateHabit));

// 4. D - Delete
router.delete("/:id", authorize, validate(validateIdSchema, 'params'), asyncWrapper(deleteHabit));

exports.habitsRouter = router;
