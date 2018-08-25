import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dummy5Component } from './dummy5.component';

describe('Dummy5Component', () => {
  let component: Dummy5Component;
  let fixture: ComponentFixture<Dummy5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dummy5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dummy5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
