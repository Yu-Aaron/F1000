import { StrategyModule } from './strategy.module';

describe('StrategyModule', () => {
  let strategyModule: StrategyModule;

  beforeEach(() => {
    strategyModule = new StrategyModule();
  });

  it('should create an instance', () => {
    expect(strategyModule).toBeTruthy();
  });
});
