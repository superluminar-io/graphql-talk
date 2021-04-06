const { ApolloServer } = require('apollo-server');
const { readFileSync } = require('fs');

const typeDefs = readFileSync('./src/schema.graphql').toString('utf-8');

const notes = [
  {
    createdAt: '2021-04-06T19:05:34.042Z',
    title: 'The Awakening',
    text: 'Kate Chopin',
  },
  {
    createdAt: '2021-03-06T19:05:34.042Z',
    title: 'City of Glass',
    text: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    listNotes: () => notes,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at ${url}`);
});
