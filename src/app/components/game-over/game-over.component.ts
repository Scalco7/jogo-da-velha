import { Component, Input } from '@angular/core';
import { ConteudoBotao } from 'src/app/interfaces/ConteudoBotao';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent {
  public contButton: ConteudoBotao[] = [{
    type: "txt",
    cont: "Jogar de Novo",
  }]

  @Input() playerWin: string = ""
  @Input() deuVelha: any
  @Input() pathClick: string = "game/1000"
}
