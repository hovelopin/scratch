import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

// 앱을 시작할때 Module을 확인한다.
@Module({
  controllers: [AppController]
})
export class AppModule {

}