import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabClientComponent } from './tab-client.component';

describe('TabClientComponent', () => {
  let component: TabClientComponent;
  let fixture: ComponentFixture<TabClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabClientComponent]
    });
    fixture = TestBed.createComponent(TabClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
