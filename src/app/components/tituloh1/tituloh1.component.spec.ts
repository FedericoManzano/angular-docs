import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tituloh1Component } from './tituloh1.component';

describe('Tituloh1Component', () => {
  let component: Tituloh1Component;
  let fixture: ComponentFixture<Tituloh1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tituloh1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tituloh1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
