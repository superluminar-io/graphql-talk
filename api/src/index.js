const { ApolloServer } = require('apollo-server');
const { readFileSync } = require('fs');

const typeDefs = readFileSync('./src/schema.graphql').toString('utf-8');

const notes = [
  {
    createdAt: '2021-04-06T19:05:34.042Z',
    title: 'Est non incididunt fugiat consectetur anim velit',
    text: 'Aliquip excepteur velit officia labore elit aliquip non fugiat ad sint anim ipsum.',
  },
  {
    createdAt: '2021-03-06T19:05:34.042Z',
    title: 'Duis incididunt ut minim incididunt',
    text: 'Enim nulla anim aliquip magna dolor et esse sint ad.',
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
