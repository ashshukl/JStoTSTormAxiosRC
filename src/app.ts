import express, { Express } from "express";
import bodyParser from "body-parser";
//Important to import this in app.ts file
import "reflect-metadata";
import axios from "axios";

import { useExpressServer } from "routing-controllers";
import { AppMiddleware } from "./middlewares/appMiddleware";
import { AppDataSource } from "./db/data-source";
import { ProductsController } from "./controllers/productsController";
import { HomeController } from "./controllers/homeController";

class App {
  app: Express;
  AppMW = AppMiddleware;
  constructor() {
    this.app = express();
    this.configMiddleware();

    useExpressServer(this.app, {
      controllers: [HomeController, ProductsController],
    });

    this.configAxiosInterceptors();
  }

  //This method configures axios interceptors
  configAxiosInterceptors() {
    // Request interceptor
    axios.interceptors.request.use(
      (config) => {
        console.log("3. Request intercepted by Axios-Request-Interceptor");
        // Add custom headers to the request config
        console.log(
          `3.1 Veifying access token: ${config.headers["access-token"]}`
        );
        return config;
      },
      (error) => {
        console.log("Request interceptor encountered error");
        return Promise.reject(error);
      }
    );

    // Response interceptor
    axios.interceptors.response.use(
      (response) => {
        // Do something with response data
        console.log("4. Response intercepted by Axios-Response-Interceptor");
        return response;
      },
      (error) => {
        // Do something with response error
        console.log("Response interceptor encountered error");
        return Promise.reject(error);
      }
    );
  }

  configMiddleware() {
    //Mounts bodyParser middleware to parse req.body into json format
    this.app.use(bodyParser.json());
    //Parses incoming request bodies containing URL-encoded data
    this.app.use(bodyParser.urlencoded({ extended: true }));

    //Error handling middleware
    this.app.use(
      (
        err: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        console.log(err);
      }
    );
  }

  start() {
    const port = process.env.PORT || 3000;
    AppDataSource.initialize().then(() => {
      //Start listening to requests on http port 3000
      this.app.listen(port, () => {
        console.log(`Server is listening on http://localhost:${port}`);
      });
    });
  }
}

const app = new App();
app.start();
