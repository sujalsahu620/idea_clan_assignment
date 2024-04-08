const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const MONGODB_URI = process.env.MONGODB_URI; // Access MongoDB connection string from environment variables

const pubsub = new PubSub();

const PORT = process.env.PORT || 4000; // Corrected to use PORT environment variable

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub })
});

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch(err => {
    console.error(err);
  });
