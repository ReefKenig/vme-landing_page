import mongoose from "../db.js"; // your mongoose connection

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  sex: { type: String, required: true },
  age: { type: Number, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  referrer: { type: String, required: false },
  calendlyBooked: { type: Boolean, default: false },
  reminderSent: {type: Boolean, default: false},
});

const User = mongoose.model("User", userSchema);

export default User;
