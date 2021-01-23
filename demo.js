const gql = require('graphql-tag');
const { ApolloServer } = require('apollo-server');
const typeDefs = gql`
  type User {
    email: String!
    avartar: String
    friends: [User]!
  }

  type Query {
    me: User!
  }
`;

const resolvers = {
  Query: {
    me() {
      return {
        email: 'tuandungbrse@gmail.com',
        avartar: 'tuandung',
        friends: [],
      };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000).then(console.log(`server is listenning on 4000`));
