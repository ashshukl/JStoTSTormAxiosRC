import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";
import { Request, Response, NextFunction } from "express";

@Middleware({ type: "before" })
export class ProductsMiddleware implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("2. Request intercepted by Products-BEFORE-Middleware");
    next();
  }
}

@Middleware({ type: "after" })
export class ProductsAfterMiddleware implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("2.2 Request intercepted by Products-AFTER-Middleware");
    next();
  }
}

// @Middleware({ type: "before" })
export class ProductsCreateMiddleware implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("2.1 Request intercepted by ProductsCreateMiddleware");
    next();
  }
}
