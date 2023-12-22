import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxVideoComponent } from './jeux-video.component';

describe('JeuxVideoComponent', () => {
  let component: JeuxVideoComponent;
  let fixture: ComponentFixture<JeuxVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeuxVideoComponent]
    });
    fixture = TestBed.createComponent(JeuxVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
