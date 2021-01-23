const { gql } = require('apollo-server');

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String!
    type: String!
    name: String!
  }

  type Query {
    pets: [Pet]!
  }
`;

module.exports = typeDefs;
