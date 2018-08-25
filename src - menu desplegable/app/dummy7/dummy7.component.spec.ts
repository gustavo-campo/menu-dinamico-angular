import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dummy7Component } from './dummy7.component';

describe('Dummy7Component', () => {
  let component: Dummy7Component;
  let fixture: ComponentFixture<Dummy7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dummy7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dummy7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
