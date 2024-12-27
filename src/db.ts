// create user schemas and models 

import { Model, Schema } from 'mongoose'

const UserSchema = new Schema({
    username: { type: String, unique: true},
    password: String
})

export const UserModel = model(UserSchema "user")