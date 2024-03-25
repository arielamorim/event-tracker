import { Test, TestingModule } from '@nestjs/testing';
import { ImportEventsService } from './import-events.service';

describe('ImportEventsService', () => {
  let service: ImportEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImportEventsService],
    }).compile();

    service = module.get<ImportEventsService>(ImportEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
