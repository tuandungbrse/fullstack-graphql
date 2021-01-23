/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, { input }, { models }) {
      return models.Pet.findMany(input);
    },

    pet(_, { input }, context) {
      return context.models.Pet.findOne(input);
    },
  },
  Mutation: {
    createPet(_, { input }, { models }) {
      return models.Pet.create(input);
    },
  },
  Pet: {
    // img(pet) {
    //   return pet.type === 'DOG'
    //     ? 'https://placedog.net/300/300'
    //     : 'http://placekitten.com/300/300';
    // },
    onwer(pet, __, { models }) {
      // return models.User.findById(pet.user) // real world use case
      console.log(pet);
      return models.User.findOne();
    },
  },
  User: {
    pets(user, __, { models }) {
      return models.Pet.findMany();
    },
  },
};
