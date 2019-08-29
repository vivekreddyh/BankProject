import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUICompComponent } from './new-uicomp.component';

describe('NewUICompComponent', () => {
  let component: NewUICompComponent;
  let fixture: ComponentFixture<NewUICompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUICompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUICompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
