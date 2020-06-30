import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceServicesComponent } from './insurance-services.component';

describe('InsuranceServicesComponent', () => {
  let component: InsuranceServicesComponent;
  let fixture: ComponentFixture<InsuranceServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
