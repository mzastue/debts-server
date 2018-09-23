import merge from 'lodash.merge';

import { resolver as QueryResolver } from './../models/query';
import { resolver as UserResolver } from './../models/user';
import { resolver as DebtResolver } from './../models/debt';
import { resolver as MutationResolver } from './../models/mutation';

export default merge({},
  QueryResolver,
  MutationResolver,
  UserResolver,
  DebtResolver,
);
