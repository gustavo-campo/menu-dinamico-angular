import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dummy4Component } from './dummy4.component';

describe('Dummy4Component', () => {
  let component: Dummy4Component;
  let fixture: ComponentFixture<Dummy4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dummy4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dummy4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
