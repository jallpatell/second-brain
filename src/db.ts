// create user schemas and models 
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

mongoose.connect("mongodb://localhost:27017/ ")

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add other fields as needed
});

export const UserModel = model("User", UserSchema);
