import gql from 'graphql-tag';
import User from './../db/user';

export const typeDef = gql`    
    type Debt {
        id: String
        amount: Int
        currency: String
        lenderId: String
        Lender: User
    }
`;

export const resolver = {
  Debt: {
    Lender: (root, args) => {
      return User.findById(root.lenderId);
    },
  }
};
