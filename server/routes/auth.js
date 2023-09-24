const router = require("express").Router();

const User = require("../models/User");

router.post("/register", async (req, res) => {
  //check if missing fields
  const { name, lastName, email, password } = req.body;
  if (!name || !lastName || !email || !password) {
    return res.status(400).json({ msg: "Not all fields have been entered." });
  }

  //check if password is long enough
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ msg: "Invalid email format." });

    //validate password
    if (password.length < 8) {
      return res
        .status(400)
        .json({ msg: "Password needs to be at least 8 characters long." });
    }
  }
  try {
    res.send("register");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
});

router.post("/login", (req, res) => {
  res.send("login");
});

module.exports = router;
