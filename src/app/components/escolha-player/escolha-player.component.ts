import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {showButtonGrande} from '../../animation';

@Component({
  selector: 'escolha-player',
  templateUrl: './escolha-player.component.html',
  styleUrls: ['./escolha-player.component.scss'],
  animations: [ showButtonGrande ],
})
export class EscolhaPlayerComponent implements OnInit {
  @Input() tipo?: string;
  @Input() qualPlayer?: string;

  @Output() caracterEscolhido = new EventEmitter<string>();

  public pathXG: string = "assets/caracters-jogo/x-player-";
  public pathBG: string = "assets/caracters-jogo/bola-player-";
  public pathQG: string = "assets/caracters-jogo/quadrado-player-";

  public pathX: string = this.pathXG;
  public pathB: string = this.pathBG;
  public pathQ: string = this.pathQG;

  public espacoEntreDiv: string = "";

  public estadoX: string = "little";
  public estadoB: string = "little";
  public estadoQ: string = "little";

  public colorDoPlayer?: string;
  public colorPadrao: string = "background: rgba(255,255,255,0)";

  public backgroundColorX: any = "background: rgba(255,255,255,0)";
  public backgroundColorB: any = "background: rgba(255,255,255,0)";
  public backgroundColorQ: any = "background: rgba(255,255,255,0)";

  ngOnInit(): void {
    this.pathX = `${this.pathXG}${this.qualPlayer}.svg`
    this.pathB = `${this.pathBG}${this.qualPlayer}.svg`
    this.pathQ = `${this.pathQG}${this.qualPlayer}.svg`

    this.espacoEntreDiv = `margin-top: ${Number(this.tipo)*30}px;`

    this.colorDoPlayer = this.qualPlayer === "1" ? "background: #AC59FF;" : "background: #00FF85;"
  }

  clickCaracter(cli: string){
    if(cli === "x"){
      this.pathX = `${this.pathXG}branco.svg`
      this.estadoX = "big"
      this.backgroundColorX = this.colorDoPlayer
    }
    else{
      this.pathX = `${this.pathXG}${this.qualPlayer}.svg`
      this.estadoX = "little"
      this.backgroundColorX = this.colorPadrao
    }

    if(cli === "b"){
      this.pathB = `${this.pathBG}branco.svg`
      this.estadoB = "big"
      this.backgroundColorB = this.colorDoPlayer
    }
    else{
      this.pathB = `${this.pathBG}${this.qualPlayer}.svg`
      this.estadoB = "little"
      this.backgroundColorB = this.colorPadrao
    }

    if(cli === "q"){
      this.pathQ = `${this.pathQG}branco.svg`
      this.estadoQ = "big"
      this.backgroundColorQ = this.colorDoPlayer
    }
    else{
      this.pathQ = `${this.pathQG}${this.qualPlayer}.svg`
      this.estadoQ = "little"
      this.backgroundColorQ = this.colorPadrao
    }

    this.caracterEscolhido.emit(cli)
  }
}
