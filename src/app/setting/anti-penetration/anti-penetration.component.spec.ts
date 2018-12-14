import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiPenetrationComponent } from './anti-penetration.component';

describe('AntiPenetrationComponent', () => {
  let component: AntiPenetrationComponent;
  let fixture: ComponentFixture<AntiPenetrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiPenetrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiPenetrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
