import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaPlayerComponent } from './escolha-player.component';

describe('EscolhaPlayerComponent', () => {
  let component: EscolhaPlayerComponent;
  let fixture: ComponentFixture<EscolhaPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolhaPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolhaPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
