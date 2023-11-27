import { Test, TestingModule } from '@nestjs/testing';
import { RutaProtegidaController } from './ruta-protegida.controller';

describe('RutaProtegidaController', () => {
  let controller: RutaProtegidaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RutaProtegidaController],
    }).compile();

    controller = module.get<RutaProtegidaController>(RutaProtegidaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
