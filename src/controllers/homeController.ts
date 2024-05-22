import { Controller, Get, UseBefore } from "routing-controllers";

@Controller("/")
export class HomeController {
  @Get()
  getAll() {
    return "Hurray!!!!, You Reached Home Page";
  }
}
