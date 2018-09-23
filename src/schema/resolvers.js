import merge from 'lodash.merge';

import { resolver as QueryResolver } from './../models/query';
import { resolver as UserResolver } from './../models/user';
import { resolver as DebtResolver } from './../models/debt';

export default merge({},
  QueryResolver,
  UserResolver,
  DebtResolver,
);
