export const typeDef = `
  type Query {
    User: User
  }
`;

export const resolver = {
  Query: {
    User: () => {
      return {
        id: 'asdojbasdoubasd',
        name: 'Jon',
        surname: 'Doe',
        allDebts: [{id:1}]
      }
    },
  }
};

