import {Schema} from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

UserSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    this['password'] = await bcrypt.hash(this['password'], 10);
    return next();
  } catch (err) {
    return next(err);
  }
});
