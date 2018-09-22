export const resolver = {
  Query: {
    hello: () => 'world',
  },
};

export const typeDef = `
  extend type Query {
    hello: String
  }
`;
