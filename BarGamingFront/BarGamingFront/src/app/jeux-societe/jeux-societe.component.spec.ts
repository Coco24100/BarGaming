import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxSocieteComponent } from './jeux-societe.component';

describe('JeuxSocieteComponent', () => {
  let component: JeuxSocieteComponent;
  let fixture: ComponentFixture<JeuxSocieteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeuxSocieteComponent]
    });
    fixture = TestBed.createComponent(JeuxSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
