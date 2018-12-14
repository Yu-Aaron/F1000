import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityOperationComponent } from './security-operation.component';

describe('SecurityOperationComponent', () => {
  let component: SecurityOperationComponent;
  let fixture: ComponentFixture<SecurityOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
