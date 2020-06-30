import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsBookingComponent } from './steps-booking.component';

describe('StepsBookingComponent', () => {
  let component: StepsBookingComponent;
  let fixture: ComponentFixture<StepsBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
