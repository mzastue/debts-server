import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import './config/db';

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;
const app = express();

const apolloServer = new ApolloServer({ schema });
apolloServer.applyMiddleware({ app });

app.listen(port, host, () => {
  console.log(`Server is listening on ${host}:${port}`);
});
