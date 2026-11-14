import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  verifyToken: String,
  verifyExpiry: Date,
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
});

export const User = mongoose.models.users || mongoose.model("users", userSchema);