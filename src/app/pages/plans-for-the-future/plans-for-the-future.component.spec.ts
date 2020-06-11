import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansForTheFutureComponent } from './plans-for-the-future.component';

describe('PlansForTheFutureComponent', () => {
  let component: PlansForTheFutureComponent;
  let fixture: ComponentFixture<PlansForTheFutureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansForTheFutureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansForTheFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
