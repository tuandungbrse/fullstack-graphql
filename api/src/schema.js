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

  input PetsInput {
    type: String
    name: String
  }

  input PetInput {
    id: ID!
  }

  type Query {
    pets(input: PetsInput): [Pet]!
    pet(input: PetInput): Pet
  }
`;

module.exports = typeDefs;
