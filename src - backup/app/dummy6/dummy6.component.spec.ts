import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dummy6Component } from './dummy6.component';

describe('Dummy6Component', () => {
  let component: Dummy6Component;
  let fixture: ComponentFixture<Dummy6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dummy6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dummy6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
