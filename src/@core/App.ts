import cors from 'cors';
import express from 'express';
import ErrorHandlerMiddleware from './infra/middlewares/error.handler.middleware';
import routes from './infra/routes';
class App {
  public express = express();

  constructor() {
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
		this.express.use(ErrorHandlerMiddleware.handler);
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default App;
