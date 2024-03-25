import { Module } from '@nestjs/common';
import { ImportEventsService } from './import-events.service';

@Module({
  providers: [ImportEventsService]
})
export class ImportEventsModule {}
