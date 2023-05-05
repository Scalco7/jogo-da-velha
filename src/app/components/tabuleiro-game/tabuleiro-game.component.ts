import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tabuleiro } from '../../interfaces/Tabuleiro';

@Component({
  selector: 'tabuleiro-game',
  templateUrl: './tabuleiro-game.component.html',
  styleUrls: ['./tabuleiro-game.component.scss']
})
export class TabuleiroGameComponent {
  public tabuleiro: Tabuleiro[][] = [
    [
      {valor: "assets/nda.svg", pos:"l1 c1"},
      {valor: "assets/nda.svg", pos:"l1 c2"},
      {valor: "assets/nda.svg", pos:"l1 c3"},
    ],
    [
      {valor: "assets/nda.svg", pos:"l2 c1"},
      {valor: "assets/nda.svg", pos:"l2 c2"},
      {valor: "assets/nda.svg", pos:"l2 c3"}
    ],
    [
      {valor: "assets/nda.svg", pos:"l3 c1"},
      {valor: "assets/nda.svg", pos:"l3 c2"},
      {valor: "assets/nda.svg", pos:"l3 c3"}
    ],
  ]

  @Input() caracterPlayer1: string = "assets/caracters-jogo/x-player-1";
  @Input() caracterPlayer2: string = "assets/caracters-jogo/x-player-2";

  @Output() trocaVez = new EventEmitter<boolean[]>()
  @Output() deuVelha = new EventEmitter()

  public isPlayerOne: boolean = true

  foiClick(pos: string){
    let win: boolean = false
    let isVelha: boolean = false
    let y = Number(pos.slice(1,2)) - 1
    let x = Number(pos.slice(-1)) - 1

    if(this.tabuleiro[y][x].valor === "assets/nda.svg"){
      this.tabuleiro[y][x].valor = this.isPlayerOne ? this.caracterPlayer1 : this.caracterPlayer2
      win = this.verSeGanhou()
      isVelha = this.verVelha()

      if(!win && isVelha){
        this.deuVelha.emit()
      }
      else{
        this.trocaVez.emit([this.isPlayerOne, win])
        this.isPlayerOne = !this.isPlayerOne
      }
    }
  }

  public verSeGanhou(): boolean{
    for(let l: number = 0; l < 3; l++){
      let linha = this.tabuleiro[l]
      if(linha[0].valor !== "assets/nda.svg" && linha[0].valor == linha[1].valor && linha[0].valor == linha[2].valor){
        return true
      }
    }

    for(let c: number = 0; c < 3; c++){
      if(this.tabuleiro[0][c].valor !== "assets/nda.svg" && this.tabuleiro[0][c].valor == this.tabuleiro[1][c].valor &&this.tabuleiro[0][c].valor == this.tabuleiro[2][c].valor){
        return true
      }
    }

    if(this.tabuleiro[0][0].valor !== "assets/nda.svg" && this.tabuleiro[0][0].valor == this.tabuleiro[1][1].valor && this.tabuleiro[0][0].valor == this.tabuleiro[2][2].valor){
      return true
    }

    if(this.tabuleiro[2][0].valor !== "assets/nda.svg" && this.tabuleiro[2][0].valor == this.tabuleiro[1][1].valor && this.tabuleiro[2][0].valor == this.tabuleiro[0][2].valor){
      return true
    }

    return false
  }

  public verVelha(): boolean{
    for(let l of this.tabuleiro){
      for(let c of l){
        if(c.valor == "assets/nda.svg"){
          return false
        }
      }
    }
    return true
  }
}
