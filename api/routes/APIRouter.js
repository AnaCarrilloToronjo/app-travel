var express = require("express");
var router = express.Router();

const Place = require("../model/modelPlaces");

//router.get("/", function(req, res, next) {
//  res.send("API is working properly");
//});

router.get("/", async (req, res) => {
  const places = await Place.find();
  res.json(places);
});

router.get("/:id", async (req, res) => {
  const place = await Place.findById(req.params.id);
  res.json(place);
});

router.post("/", async (req, res) => {
  const place = new Place(req.body);
  await place.save();
  res.json("everything was OK");
});

router.delete("/:id", async (req, res) => {
  await Place.findByIdAndDelete(req.params.id);
});

router.put("/:id", async (req, res) => {
  const { city, info, fromDate, toDate, photo } = req.body;
  const updatePlace = { city, info, fromDate, toDate, photo };
  await Place.findByIdAndUpdate(req.params.id, updatePlace);
  res.json("everything was OK");
});

module.exports = router;
