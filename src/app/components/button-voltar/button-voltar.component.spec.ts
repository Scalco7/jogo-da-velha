import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVoltarComponent } from './button-voltar.component';

describe('ButtonVoltarComponent', () => {
  let component: ButtonVoltarComponent;
  let fixture: ComponentFixture<ButtonVoltarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonVoltarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonVoltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
