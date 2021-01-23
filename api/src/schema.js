const { gql } = require('apollo-server');

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    pets: [Pet]!
  }

  type Pet {
    id: ID!
    createdAt: String!
    type: String!
    name: String!
    owner: User!
  }

  input PetsInput {
    type: String
    name: String
  }

  input PetInput {
    id: ID!
  }

  input CreatePetInput {
    type: String!
    name: String!
  }

  type Query {
    pets(input: PetsInput): [Pet]!
    pet(input: PetInput): Pet
  }

  type Mutation {
    createPet(input: CreatePetInput!): Pet
  }
`;

module.exports = typeDefs;
