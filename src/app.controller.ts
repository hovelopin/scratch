import { Controller, Get } from "@nestjs/common";

// decorator
@Controller()
export class AppController {
  @Get()
  getRootRoute(){
    return 'hi there!';
  }
}
