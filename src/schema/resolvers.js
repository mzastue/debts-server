import merge from 'lodash.merge';

import { resolver as HelloResolver } from './../models/hello';

export default merge({},
  HelloResolver,
);
