mongoURI =
  "mongodb+srv://himanshuvashishtha001hp:heGHZfSxq86AKIir@userdatabase.jp4pdkc.mongodb.net/";
const PORT = 3000;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/userSchema");
const UserProfile = require("./models/userProfileSchema");

mongoose.connect(mongoURI).then(() => console.log("mongoose connected"));

app.use(express.json());

app.post("/user", async (req, res) => {
  try {
    const { FirstName, LastName, email, dob, mobile, Password } = req.body;
    const user = new User({
      FirstName,
      LastName,
      email,
      dob,
      mobile,
      Password,
    });
    const saveUser = await user.save();

    const userprofile = new UserProfile({
      user_id: saveUser._id,
      dob,
      mobile,
    });
    await userprofile.save();
    res.json({
      message: "User and Profile Created Successfully",
      user: saveUser,
      userprofile: userprofile,
    });
  } catch (err) {
    console.error(err);
  }
});

app.get("/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  const profile = await UserProfile.findOne({ user_id: req.params.id });
  res.json({ user, profile });
});

app.put("/user/:id", async (req, res) => {
  const userId = req.params.id;
  const { FirstName, LastName, email, dob, mobile, Password } = req.body;
  const user = await User.findByIdAndUpdate(userId, {
    FirstName,
    LastName,
    email,
    Password,
  });
  const profile = await UserProfile.findOneAndUpdate(
    { user_id: userId },
    { dob, mobile }
  );
  res.json({ message: "Data is Updated"});
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
