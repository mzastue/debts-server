import gql from 'graphql-tag';

export const typeDef = gql`
  type User {
    id: String
    name: String
    surname: String
    allDebts: [Debt]
  }
`;

export const resolver = {
  User: {
    allDebts: () => {
      return [
        { id: 'aiusdbasid', amount: 12 },
      ]
    },
  }
};
