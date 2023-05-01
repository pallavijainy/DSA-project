const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    id: { type: Number },
    name: { type: String, required: true, minlength: 1, maxlength: 50 },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(value);
        },
        message: "Please enter a valid email address"
      }
    },
    bio: { type: String, minlength: 0, maxlength: 200 },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

module.exports = { userModel };
