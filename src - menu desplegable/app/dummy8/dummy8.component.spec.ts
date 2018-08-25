import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dummy8Component } from './dummy8.component';

describe('Dummy8Component', () => {
  let component: Dummy8Component;
  let fixture: ComponentFixture<Dummy8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dummy8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dummy8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
