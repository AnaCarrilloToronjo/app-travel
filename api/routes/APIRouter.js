var express = require("express");
var router = express.Router();

const Place = require("../model/modelPlaces");

const multer = require("multer");
const upload = multer();

router.get("/", function(req, res, next) {
  res.send("API is working properly");
});

router.get("/places", async (req, res) => {
  const places = await Place.find();
  res.json(places);
});

router.get("/:id", async (req, res) => {
  const place = await Place.findById(req.params.id);
  res.json(place);
});

router.get("/img/:id.png", (req, resp) => {
  Place.findById(req.params.id, function(err, result) {
    if (err) {
      resp.send(`error: ${err}`);
    } else {
      resp.header("Content-Type", "image/png");
      resp.send(result.photos);
    }
  });
});

router.post("/newPlace", async (req, res) => {
  const place = new Place(req.body);
  await place.save();
  res.json("everything was OK");
});

router.post("/img/:id", upload.single("photos"), async (req, res) => {
  let photo = req.file.buffer;
  const place = await Place.findById(req.params.id);
  place.photos = req.file.buffer;
  place.save();
});

router.delete("/:id", async (req, res) => {
  await Place.findByIdAndDelete(req.params.id);
});

module.exports = router;
