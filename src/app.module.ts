import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { controllers, services } from './routes/exporters';

@Module({
  imports: [],
  controllers: [AppController, ...controllers],
  providers: [AppService, ...services],
})
export class AppModule {}
