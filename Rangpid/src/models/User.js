import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  link: { type: String, required: true },
  matchedLink: { type: String, required: false },
  mbti: { type: String, required: true },
  residence: { type: String, required: true },
  height: { type: Number, required: true },
  keyword: { type: Array, required: true },
  idealAge: { type: String, required: true },//20~30
  idealMbti: { type: Array, required: true },
  idealResidence: { type: String, required: true },
  idealHeight: { type: String, required: true },//140~200
  idealKeyword: { type: Array, required: true },
  matchingScore: { type: Number, required: false },
});

userSchema.pre("save", async function () {
  if (this.isModified("username")) {
    this.username = await bcrypt.hash(this.username, 5);
  }
});

const User = mongoose.model("User", userSchema);
export default User;