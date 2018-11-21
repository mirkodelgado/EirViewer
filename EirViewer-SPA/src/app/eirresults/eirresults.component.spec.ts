/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EirresultsComponent } from './eirresults.component';

describe('EirresultsComponent', () => {
  let component: EirresultsComponent;
  let fixture: ComponentFixture<EirresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EirresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EirresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
