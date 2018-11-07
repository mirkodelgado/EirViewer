/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemotableComponent } from './demotable.component';

describe('DemotableComponent', () => {
  let component: DemotableComponent;
  let fixture: ComponentFixture<DemotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
