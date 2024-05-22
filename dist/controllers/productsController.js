"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const axios_1 = __importDefault(require("axios"));
const routing_controllers_1 = require("routing-controllers");
const productsMiddleware_1 = require("../middlewares/productsMiddleware");
let ProductsController = class ProductsController {
    getById(req) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(`Recieved id = ${id}`);
            // let data = await AppDataSource.getRepository(Product).findOne({
            //   where: {
            //     id: id as any,
            //   },
            // });
            // return data;
            console.log(`Logging id: ${req.params.xd}`);
            return "XD XDX XDX XDDXXD";
        });
    }
    // @UseBefore(ProductsMiddleware)
    // @Post("/")
    // create(@Body() reqData: any) {
    //   const product: Product = new Product();
    //   product.name = reqData.name;
    //   product.price = reqData.price;
    //   product.save().then(() => {
    //     return product;
    //   });
    //   //res.send(await AppDataSource.manager.save(product));
    // }
    getAll(token, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //return await AppDataSource.manager.find(Product);
            // Making a GET request
            let respo = yield axios_1.default.get("https://axiosnode.free.beeceptor.com", {
                headers: {
                    "access-token": token,
                },
            });
            console.log("5. Sending Response back from ProductsController");
            return respo.data;
            //Other requests
            // axios.post(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>
            // axios.delete(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>
        });
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, routing_controllers_1.UseBefore)(productsMiddleware_1.ProductsMiddleware),
    (0, routing_controllers_1.Get)("/byId"),
    __param(0, (0, routing_controllers_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getById", null);
__decorate([
    (0, routing_controllers_1.UseBefore)(productsMiddleware_1.ProductsMiddleware),
    (0, routing_controllers_1.Get)(),
    __param(0, (0, routing_controllers_1.HeaderParam)("access-token")),
    __param(1, (0, routing_controllers_1.Req)()),
    __param(2, (0, routing_controllers_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getAll", null);
exports.ProductsController = ProductsController = __decorate([
    (0, routing_controllers_1.Controller)("/products")
], ProductsController);
//# sourceMappingURL=productsController.js.map