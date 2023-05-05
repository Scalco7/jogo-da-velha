import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGeralComponent } from './button-geral.component';

describe('ButtonGeralComponent', () => {
  let component: ButtonGeralComponent;
  let fixture: ComponentFixture<ButtonGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonGeralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
