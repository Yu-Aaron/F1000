import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticRouterComponent } from './static-router.component';

describe('StaticRouterComponent', () => {
  let component: StaticRouterComponent;
  let fixture: ComponentFixture<StaticRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
