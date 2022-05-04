var express = require('express');
var router = express.Router();

const User = require("../model/modelUsers");

router.post('/auth', async(req, res)=> {
  const user = await User.findOne({ username: req.body.username, password:  req.body.password})

  if(user){
    res.cookie('session', req.body.username, {expire : new Date() + 14});
    res.json({username: user.username});
  }else{
    res.sendStatus(401);
  }
});

router.post("/", async (req, res) => {
  const userAuth = await User.findOne({ username: req.body.username})

  if(!userAuth) {
    const user = new User(req.body);
    await user.save();
    res.json("everything was OK");
  }else{
    res.sendStatus(401);
  }
});

router.get("/logout", async (req, res) => {
  const result = res.clearCookie("session");
  res.sendStatus(200);
  
});

module.exports = router;
