import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/asdf")
  getRootRoute() {
    return "Hello world!";
  }

  @Get("/bye")
  bye() {
    return "bye";
  }
}
