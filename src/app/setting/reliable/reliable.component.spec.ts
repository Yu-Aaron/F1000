import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliableComponent } from './reliable.component';

describe('ReliableComponent', () => {
  let component: ReliableComponent;
  let fixture: ComponentFixture<ReliableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReliableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReliableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
