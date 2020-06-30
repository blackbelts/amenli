import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteTitleComponent } from './quote-title.component';

describe('QuoteTitleComponent', () => {
  let component: QuoteTitleComponent;
  let fixture: ComponentFixture<QuoteTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
