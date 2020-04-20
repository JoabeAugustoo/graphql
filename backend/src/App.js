import express from 'express';
import ExGraphql from 'express-graphql';
import schema from './graphql/schema';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(
      '/api',
      ExGraphql({
        schema,
        graphiql: true,
      })
    );
  }
}

export default new App();
