import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCaracterComponent } from './choose-caracter.component';

describe('ChooseCaracterComponent', () => {
  let component: ChooseCaracterComponent;
  let fixture: ComponentFixture<ChooseCaracterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseCaracterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseCaracterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
