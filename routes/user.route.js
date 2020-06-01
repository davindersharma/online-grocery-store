const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

//route   /
//desc    Register
//access  public
router.post("/register", async (req, res) => {
  try {
    const { userId, email, password } = req.body;
    let checkUser = await User.findOne({ email });

    if (checkUser) {
      return res.json({ msg: "User already exists" });
    }

    const user = new User({ userId, email, password });
    // console.log(user.userId + user.email + user.password);

    await user.save();
    res.json(user);
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    const user = await User.findOne({ email, password });
    if (user) {
      return res.json(true);
    }
    return res.json("Email or password is wrong");
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
