import { MonitorModule } from './monitor.module';

describe('MonitorModule', () => {
  let monitorModule: MonitorModule;

  beforeEach(() => {
    monitorModule = new MonitorModule();
  });

  it('should create an instance', () => {
    expect(monitorModule).toBeTruthy();
  });
});
