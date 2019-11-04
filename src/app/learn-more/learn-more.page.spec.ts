import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMorePage } from './learn-more.page';

describe('LearnMorePage', () => {
  let component: LearnMorePage;
  let fixture: ComponentFixture<LearnMorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
