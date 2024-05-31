import mongoose from "mongoose";

const May22Schema = new mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true},
    role:{type:String,default:"User"}
   
});

export const May22Blog = mongoose.model('May22', May22Schema);