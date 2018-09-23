import mongoose from './../config/db';

export  default mongoose.model(
  'User',
  mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
  })
);
