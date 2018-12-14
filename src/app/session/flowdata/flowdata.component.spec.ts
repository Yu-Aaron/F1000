import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowdataComponent } from './flowdata.component';

describe('FlowdataComponent', () => {
  let component: FlowdataComponent;
  let fixture: ComponentFixture<FlowdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
