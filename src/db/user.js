import mongoose from './../config/db';
import getById from './model/getById';

import Debt from './debt';

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  debts: [Debt.schema],
});

schema.methods.hasDebts = function () {
  return this.debts.length;
};

schema.methods.getDebt = function (id) {
  return this.debts.find(debt => {
    return debt._id.toString() === id;
  });
};

schema.methods.getLenders = function () {
  const lenderIds = JSON.parse(JSON.stringify(this.debts)).map(debt => debt.lenderId);
  const uniqueLendersIds = Array.from(new Set(lenderIds));

  return uniqueLendersIds.map(lenderId => getById(this.model('User'), lenderId));
};

schema.statics.getById = function (id) {
  return getById(this.model('User'), id);
};

export default mongoose.model('User', schema);
