import gql from 'graphql-tag';
import User from './../db/user';

export const typeDef = gql`
    input UserInput {
        name: String
        surname: String
    }

    type Mutation {
        addUser(data: UserInput): User
    }
`;

export const resolver = {
  Mutation: {
    addUser: (root, {data}) => {
      return new Promise((resolve, reject) => {
        const newUser = new User(data);

        newUser.save()
          .then(data => resolve(data))
          .catch(error => reject(error));
      });
    },
  }
};
