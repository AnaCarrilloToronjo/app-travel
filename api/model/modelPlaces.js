const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlaceSchema = new Schema({
  city: { type: String, required: true },
  info: { type: String },
  fromDate: { type: Date },
  toDate: { type: Date },
  photo: { type: Buffer }
});

const Place = mongoose.model("Place", PlaceSchema);
module.exports = Place;
