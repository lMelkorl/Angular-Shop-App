import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctAddForms1Component } from './proudct-add-forms1.component';

describe('ProudctAddForms1Component', () => {
  let component: ProudctAddForms1Component;
  let fixture: ComponentFixture<ProudctAddForms1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProudctAddForms1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProudctAddForms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
