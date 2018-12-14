import { RuleModule } from './rule.module';

describe('RuleModule', () => {
  let ruleModule: RuleModule;

  beforeEach(() => {
    ruleModule = new RuleModule();
  });

  it('should create an instance', () => {
    expect(ruleModule).toBeTruthy();
  });
});
