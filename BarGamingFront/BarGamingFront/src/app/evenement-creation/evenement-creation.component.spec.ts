import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementCreationComponent } from './evenement-creation.component';

describe('EvenementCreationComponent', () => {
  let component: EvenementCreationComponent;
  let fixture: ComponentFixture<EvenementCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvenementCreationComponent]
    });
    fixture = TestBed.createComponent(EvenementCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
