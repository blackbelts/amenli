import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeInsuranceComponent } from './type-insurance.component';

describe('TypeInsuranceComponent', () => {
  let component: TypeInsuranceComponent;
  let fixture: ComponentFixture<TypeInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
