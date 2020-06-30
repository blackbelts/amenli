import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollbrationComponent } from './collbration.component';

describe('CollbrationComponent', () => {
  let component: CollbrationComponent;
  let fixture: ComponentFixture<CollbrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollbrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollbrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
