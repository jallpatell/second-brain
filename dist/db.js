"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
// create user schemas and models 
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
mongoose_1.default.connect("mongodb://localhost:27017/ ");
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
exports.UserModel = model("User", UserSchema);
