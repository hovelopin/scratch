// 앱을 시작하는 곳

import { Controller , Module , Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

// decorator
@Controller()
  class AppController {
  @Get()
  getRootRoute(){
    return 'hi there!';
  }
}

// 앱을 시작할때 Module을 확인한다.
@Module({
  controllers: [AppController]
})
class AppModule {

}

async function bootstrap(){
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();