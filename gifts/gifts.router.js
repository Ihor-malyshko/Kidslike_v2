const { Router } = require("express");
const { authorize } = require("../helpers/auth/token_verify");
const { asyncWrapper } = require("../helpers/wrapper_Try_Catch");
const {
  createGift,
  getGifts,
  getGiftById,
  updateGift,
  deleteGift,
} = require("./gifts.controller");
const { validate } = require("../helpers/validate");
const { createGiftSchema, updateGiftSchema } = require("./gifts.schemes");
const mongoose = require("mongoose");
const { GiftModel } = require("./gifts.model");

const router = Router();

router.param("giftId", async (req, res, next, giftId) => {
  if (!mongoose.Types.ObjectId.isValid(giftId)) {
    return res.status(400).send("Validation failed");
  }

  const gift = await GiftModel.findById(giftId);
  if (!gift) {
    return res.status(404).send("Gift not found");
  }
  req.gift = gift;
  return next();
});

// CRUD

// 1. C - Create
router.post(
  "/",
  authorize,
  validate(createGiftSchema),
  asyncWrapper(createGift)
);

// 2. R - Read
router.get("/", authorize, asyncWrapper(getGifts));
router.get("/:giftId", authorize, asyncWrapper(getGiftById));

// // 3. U - Update
router.patch(
  "/:giftId",
  authorize,
  validate(updateGiftSchema),
  asyncWrapper(updateGift)
);

// 4. D - Delete
router.delete("/:giftId", authorize, asyncWrapper(deleteGift));

exports.giftsRouter = router;
