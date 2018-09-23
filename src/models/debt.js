import gql from 'graphql-tag';

export const typeDef = gql`    
    type Debt {
        id: String
        amount: Int
        User: User
    }
`;

export const resolver = {
  Debt: {
    User: () => {
      return { id: 1, name: 'Kazik', surname: "Blabla"};
    }
  }
};
