import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/interfaces/Player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  public player1: Player = {
    logo: "",
    caracter: "",
  }
  public player2: Player = {
    logo: "",
    caracter: "",
  }

  public isBot: string = "Bot"
  public isTwoPlayers: boolean = false

  public fundoPlayer1: string = "assets/fundo-player-1.svg";
  public fundoPlayer2: string = "assets/fundo-player-2.svg";

  public hideLuzMagica1: string = "display: flex;"
  public hideLuzMagica2: string = "display: none;"

  public isWin: boolean = false
  public whoWin: string = ""
  public isVelha: boolean = false

  public pathDeuVelha: string = "game/"
  public playerOneStart: boolean = true

  constructor(private route: ActivatedRoute) {
    let id: string = ""
    this.route.params.subscribe(res => id = res['data'])
    let numberWhoStart = Number(id.slice(3, 4)) == 0 ? "1" : "0"

    if (id.slice(0, 1) === "1") {
      this.player1.logo = "assets/player-1.svg"
      this.player2.logo = "assets/bot-img.svg"
      this.fundoPlayer2 = "assets/fundo-bot.svg"
      this.isBot = "Bot"
    }
    else {
      this.player1.logo = "assets/player-1.svg"
      this.player2.logo = "assets/player-2.svg"
      this.isBot = "Player 2"
      this.isTwoPlayers = true
    }

    switch (id.slice(1, 2)) {
      case "1": this.player1.caracter = "assets/caracters-jogo/x-player-1.svg"; break

      case "2": this.player1.caracter = "assets/caracters-jogo/bola-player-1.svg"; break

      case "3": this.player1.caracter = "assets/caracters-jogo/quadrado-player-1.svg"; break
    }

    switch (id.slice(2, 3)) {
      case "0": this.player2.caracter = "assets/bot-img.svg"; break

      case "1": this.player2.caracter = "assets/caracters-jogo/x-player-2.svg"; break

      case "2": this.player2.caracter = "assets/caracters-jogo/bola-player-2.svg"; break

      case "3": this.player2.caracter = "assets/caracters-jogo/quadrado-player-2.svg"; break
    }

    if (id.slice(3, 4)) {
      this.playerOneStart = id.slice(3, 4) == "0" ? true : false
    }

    this.hideLuzMagica1 = id.slice(3, 4) == "1" ? "display: none;" : "display: flex;";
    this.hideLuzMagica2 = id.slice(3, 4) == "1" ? "display: flex;" : "display: none;";

    this.pathDeuVelha = this.pathDeuVelha + id.slice(0, 3) + numberWhoStart
  }

  trocaVez(is: boolean[]) {
    let isPlayerOne: boolean = is[0]
    this.isWin = is[1]

    if (this.isWin) {
      this.whoWin = isPlayerOne ? "Player 1" : this.isBot;
    }

    this.hideLuzMagica1 = isPlayerOne ? "display: none;" : "display: flex;";
    this.hideLuzMagica2 = isPlayerOne ? "display: flex;" : "display: none;";
  }

  deuVelha() {
    this.isVelha = true
    this.whoWin = "Deu velha"
    this.isWin = true
  }
}
