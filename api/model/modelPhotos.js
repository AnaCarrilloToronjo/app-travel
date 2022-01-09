const mongoose = require("mongoose");
const { Schema } = mongoose;

const PhotoSchema = new Schema({
  place_id: { type: String, required: true },
  photo: { type: Buffer }
});

const Photo = mongoose.model("Photo", PhotoSchema);
module.exports = Photo;
