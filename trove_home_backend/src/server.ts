// Import Apollo Server packages
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

// Import basic web server packages
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

// Import our GraphQL schema and resolvers
import { typeDefs } from './graphql/schema.graphql';
import { resolvers } from './graphql/resolvers.graphql';

// Main function to start our server
const startServer = async () => {
  // STEP 1: Create a basic Express web server
  const app = express();
  const httpServer = http.createServer(app);

  // STEP 2: Create our GraphQL server with Apollo
  const server = new ApolloServer({
    typeDefs,    // This is our schema (the menu of available data)
    resolvers,   // These are our functions that fetch the data
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })], // This helps shut down the server properly
  });

  // STEP 3: Start the Apollo Server
  await server.start();

  // STEP 4: Connect Apollo Server to our Express web server
  app.use(
    '/graphql', // This is the URL endpoint for our GraphQL API
    cors<cors.CorsRequest>(), // Allows requests from other domains
    bodyParser.json(), // Parses JSON request bodies
    expressMiddleware(server, {
      // This function runs for every GraphQL request
      context: async () => {
        // Return empty context for now
        return {};
      },
    }),
  );

  // STEP 5: Start listening for web requests
  const PORT = process.env.PORT || 4000;
  await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
};

// Start the server and catch any errors
startServer().catch((err) => {
  console.error('Failed to start the server:', err);
}); 