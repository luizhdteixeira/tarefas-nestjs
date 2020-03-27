import { Test, TestingModule } from '@nestjs/testing';
import { TarefasService } from './tarefas.service';

describe('TarefasService', () => {
  let provider: TarefasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TarefasService],
    }).compile();

    provider = module.get<TarefasService>(TarefasService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
