var express = require("express");
var router = express.Router();

const Place = require("../model/modelPlaces");
const ObjectId = require("mongoose").Types.ObjectId;

router.get("/", async (req, res) => {
  const places = await Place.find({ user: req.cookies.session });
  if (places?.length > 0) {
    res.json(places);
  }
});

router.get("/:id", async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.sendStatus(400);
    return;
  }

  const place = await Place.findById(req.params.id);
  if (!place) {
    res.sendStatus(404);
    return;
  }
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
