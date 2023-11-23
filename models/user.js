import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  image: {
    type: String,
  },
  date:{
    type: Date,
    default: Date.now
  },
});

const User = models.User || model("User", UserSchema);

export default User;
