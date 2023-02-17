//  Add your code here
const { Schema, model } = require("mongoose");
const celebritysSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  occupation: {
    type: String,
  },

  catchPhrase: {
    type: String,
  },
});

const Celebrity = model("Celebrity", celebritysSchema);

module.exports = Celebrity;
