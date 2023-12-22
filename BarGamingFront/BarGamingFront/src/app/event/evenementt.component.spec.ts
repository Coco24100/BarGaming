import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';

describe('EvenementComponent', () => {
  let component: EvenementComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventComponent]
    });
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
