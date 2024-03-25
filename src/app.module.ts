import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImportEventsModule } from './import-events/import-events.module';

@Module({
  imports: [ImportEventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
