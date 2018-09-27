import mongoose from './../config/db';

import Debt from './debt';

export default mongoose.model(
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
    debts: [Debt.schema],
  })
);
