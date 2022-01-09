var express = require("express");
var router = express.Router();

const modelPhoto = require("../model/modelPhotos");

const multer = require("multer");
const upload = multer();

router.get("/cities/:id", (req, resp) => {
  modelPhoto.find({ place_id: req.params.id }, function(err, result) {
    if (err) {
      resp.send(`error: ${err}`);
    } else {
      let photos_id = result.map(function(x) {
        console.log(x._id);
        return x._id;
      });
      resp.send(photos_id);
    }
  });
});

router.get("/:id.png", (req, resp) => {
  modelPhoto.findById(req.params.id, function(err, result) {
    if (err) {
      resp.send(`error: ${err}`);
    } else {
      resp.header("Content-Type", "image/png");
      resp.send(result.photo);
    }
  });
});

router.post("/:id", upload.single("photo"), async (req, res) => {
  const place_id = req.params.id;
  const photo = req.file.buffer;
  const newPhoto = new modelPhoto({ place_id, photo });
  await newPhoto.save();
  res.json("everything was OK");
});

router.delete("/:id", async (req, res) => {
  await modelPhoto.findByIdAndDelete(req.params.id);
});

module.exports = router;
