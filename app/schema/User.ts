import * as mongoose from "mongoose";

interface IUser {
    first_name:string;
    last_name:string;
    email:string;
}

interface IUserModel extends IUser, mongoose.Document{};
var userSchema = new mongoose.Schema({
    title: { type: String, required: true },
    first_name: String,
    last_name: String,
    email: String,
    createdAt:  { type: Date, default: Date.now }
},{ 
    versionKey: false
});

userSchema.pre('save', next => {
  let now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

var User = mongoose.model<IUserModel>("User", userSchema);

export = User;