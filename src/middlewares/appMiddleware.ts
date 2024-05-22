import { Request, Response, NextFunction } from "express";
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({ type: "before" })
class AppMiddlewareInternal implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("1. Request intercepted by AppMiddleware");
    const accessToken = req.headers["access-token"];

    if (!accessToken || accessToken[0].trim() === "") {
      return res.status(400).json({ error: "AccessToken missing or empty" });
    }

    // If AccessToken is present, continue to the next middleware or route handler
    next();
  }
}

export const AppMiddleware = new AppMiddlewareInternal();
