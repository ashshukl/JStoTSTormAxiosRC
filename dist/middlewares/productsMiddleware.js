"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateMiddleware = exports.ProductsMiddleware = void 0;
class ProductsMiddleware {
    use(req, res, next) {
        console.log("2. Request intercepted by ProductsMiddleware");
        next();
    }
}
exports.ProductsMiddleware = ProductsMiddleware;
class ProductsCreateMiddleware {
    use(req, res, next) {
        console.log("2.1 Request intercepted by ProductsCreateMiddleware");
        next();
    }
}
exports.ProductsCreateMiddleware = ProductsCreateMiddleware;
//# sourceMappingURL=productsMiddleware.js.map