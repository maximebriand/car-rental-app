import mongoose, {Schema} from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new Schema({
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  role: {type: String, required: true},
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

export const CarSchema = new Schema({
    numberplate: {type: String, unique: true, required: true},
    brand: {type: String, required: true},
    powerful: {type: Number, required: true},
    seats: {type: Number, required: true},
    restriction: new Schema({
      minAge: {type: Number, required: true},
      licenceDriverOlderThan: {type: Number, required: true}
    })
  }
)

export const BookingSchema = new Schema({
  startingDate: {type: Date, required: true},
  endingDate: {type: Date, required: true},
  car: {type: mongoose.Schema.Types.ObjectId, ref: 'Car'},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})
