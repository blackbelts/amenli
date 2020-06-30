import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollbrationsComponent } from './collbrations.component';

describe('CollbrationsComponent', () => {
  let component: CollbrationsComponent;
  let fixture: ComponentFixture<CollbrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollbrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollbrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
