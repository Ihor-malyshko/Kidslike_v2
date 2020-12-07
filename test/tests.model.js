const mongoose = require("mongoose");
const { Schema } = mongoose;

const testSchema = new Schema({
  string: { type: String, required: true },
});

exports.TestModel = mongoose.model("Test", testSchema);
