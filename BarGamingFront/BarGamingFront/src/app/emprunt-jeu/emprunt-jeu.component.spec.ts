import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpruntJeuComponent } from './emprunt-jeu.component';

describe('EmpruntJeuComponent', () => {
  let component: EmpruntJeuComponent;
  let fixture: ComponentFixture<EmpruntJeuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpruntJeuComponent]
    });
    fixture = TestBed.createComponent(EmpruntJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
