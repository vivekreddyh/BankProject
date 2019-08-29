import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhnUIComponent } from './phn-ui.component';

describe('PhnUIComponent', () => {
  let component: PhnUIComponent;
  let fixture: ComponentFixture<PhnUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhnUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhnUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
