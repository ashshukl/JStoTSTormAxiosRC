import { AppDataSource } from "../db/data-source";
import { Product } from "../models/product";
import axios from "axios";
import {
  Body,
  Controller,
  Get,
  HeaderParam,
  Param,
  Post,
  Req,
  Res,
  UseBefore,
} from "routing-controllers";
// import { ProductsMiddleware } from "../middlewares/productsMiddleware";
import { Request } from "express";
import { ProductsCreateMiddleware } from "../middlewares/productsMiddleware";

@Controller("/products")
export class ProductsController {
  // middleware = new ProductsMiddleware();
  // @UseBefore(ProductsMiddleware)
  @Get("/:id")
  async getById(@Param("id") id: number) {
    // let id = req.query["id"];
    console.log(`Recieved id = ${id}`);
    let data = await AppDataSource.getRepository(Product).findOne({
      where: {
        id: id as any,
      },
    });
    return data;
  }

  @UseBefore(ProductsCreateMiddleware)
  @Post("/")
  async create(@Body() reqData: any) {
    const product: Product = new Product();
    product.name = reqData.name;
    product.price = reqData.price;
    await product.save();
    return product;

    //res.send(await AppDataSource.manager.save(product));
  }

  // @UseBefore(ProductsMiddleware)
  @Get()
  async getAll(
    @HeaderParam("access-token") token: string,
    @Req() req: any,
    @Res() res: any
  ) {
    //return await AppDataSource.manager.find(Product);

    // Making a GET request
    let respo = await axios.get("https://axiosnode.free.beeceptor.com", {
      headers: {
        "access-token": token,
      },
    });

    console.log("5. Sending Response back from ProductsController");

    return respo.data;

    //Other requests
    // axios.post(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>
    // axios.delete(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>
  }
}
