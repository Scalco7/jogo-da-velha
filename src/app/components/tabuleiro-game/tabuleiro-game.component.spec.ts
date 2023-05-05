import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabuleiroGameComponent } from './tabuleiro-game.component';

describe('TabuleiroGameComponent', () => {
  let component: TabuleiroGameComponent;
  let fixture: ComponentFixture<TabuleiroGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabuleiroGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabuleiroGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
