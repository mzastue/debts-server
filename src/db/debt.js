import mongoose from './../config/db';
import User from './user';

export default mongoose.model(
  'Debt',
  mongoose.Schema({
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
    lenderId: {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
    },
  })
);
