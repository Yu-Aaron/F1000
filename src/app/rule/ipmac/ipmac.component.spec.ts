import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpmacComponent } from './ipmac.component';

describe('IpmacComponent', () => {
  let component: IpmacComponent;
  let fixture: ComponentFixture<IpmacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpmacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpmacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
