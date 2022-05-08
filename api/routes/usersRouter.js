var express = require("express");
var router = express.Router();

const User = require("../model/modelUsers");

router.post("/auth", async (req, res) => {
  let { username } = req.body.username;
  username = req.body.username.trim().toLowerCase();

  const user = await User.findOne({
    username: username,
    password: req.body.password,
  });

  if (user) {
    res.cookie("session", username, { expire: new Date() + 14 });
    res.json({ username: user.username });
  } else {
    res.sendStatus(401);
  }
});

router.post("/", async (req, res) => {
  let { username, password } = req.body;
  username = username.trim().toLowerCase();

  const userAuth = await User.findOne({
    username: username,
  });

  if (!userAuth) {
    const user = new User({ username, password });
    await user.save();
    res.json("everything was OK");
  } else {
    res.sendStatus(401);
  }
});

router.get("/logout", async (req, res) => {
  const result = res.clearCookie("session");
  res.sendStatus(200);
});

module.exports = router;
