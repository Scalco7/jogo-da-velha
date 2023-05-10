import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Tabuleiro } from '../../interfaces/Tabuleiro';

@Component({
  selector: 'tabuleiro-game',
  templateUrl: './tabuleiro-game.component.html',
  styleUrls: ['./tabuleiro-game.component.scss']
})
export class TabuleiroGameComponent implements OnInit {
  public tabuleiro: Tabuleiro[][] = [
    [
      { valor: "assets/nda.svg", pos: "l1 c1" },
      { valor: "assets/nda.svg", pos: "l1 c2" },
      { valor: "assets/nda.svg", pos: "l1 c3" },
    ],
    [
      { valor: "assets/nda.svg", pos: "l2 c1" },
      { valor: "assets/nda.svg", pos: "l2 c2" },
      { valor: "assets/nda.svg", pos: "l2 c3" }
    ],
    [
      { valor: "assets/nda.svg", pos: "l3 c1" },
      { valor: "assets/nda.svg", pos: "l3 c2" },
      { valor: "assets/nda.svg", pos: "l3 c3" }
    ],
  ]

  @Input() caracterPlayer1: string = "assets/caracters-jogo/x-player-1";
  @Input() caracterPlayer2: string = "assets/caracters-jogo/x-player-2";
  @Input() isBotPlaying: boolean = false;

  @Output() trocaVez = new EventEmitter<boolean[]>()
  @Output() deuVelha = new EventEmitter()

  public isPlayerOne: boolean = true

  public contTimes: number = 0;
  public myMove: number = 0;
  public theirMove: number = 0;

  ngOnInit(): void {
    if (!this.isPlayerOne) {
      this.foiClick("l1 c2")
    }
  }

  public async foiClick(pos: string) {
    let y = Number(pos.slice(1, 2)) - 1
    let x = Number(pos.slice(-1)) - 1

    if (this.tabuleiro[y][x].valor === "assets/nda.svg") {
      if (this.isPlayerOne) {
        this.tabuleiro[y][x].valor = this.isPlayerOne ? this.caracterPlayer1 : this.caracterPlayer2
        this.verForGame()
        this.contTimes++
      }

      if (this.isBotPlaying) {
        this.botTime()
        this.verForGame()
        this.contTimes++
      }
    }
  }

  public verForGame() {
    let win: boolean = false
    let isVelha: boolean = false
    win = this.verSeGanhou()
    isVelha = this.verVelha()

    if (!win && isVelha) {
      this.deuVelha.emit()
    }
    else {
      this.trocaVez.emit([this.isPlayerOne, win])
      this.isPlayerOne = !this.isPlayerOne
    }
  }

  public verSeGanhou(): boolean {
    for (let l: number = 0; l < 3; l++) {
      let linha = this.tabuleiro[l]
      if (linha[0].valor !== "assets/nda.svg" && linha[0].valor == linha[1].valor && linha[0].valor == linha[2].valor) {
        return true
      }
    }

    for (let c: number = 0; c < 3; c++) {
      if (this.tabuleiro[0][c].valor !== "assets/nda.svg" && this.tabuleiro[0][c].valor == this.tabuleiro[1][c].valor && this.tabuleiro[0][c].valor == this.tabuleiro[2][c].valor) {
        return true
      }
    }

    if (this.tabuleiro[0][0].valor !== "assets/nda.svg" && this.tabuleiro[0][0].valor == this.tabuleiro[1][1].valor && this.tabuleiro[0][0].valor == this.tabuleiro[2][2].valor) {
      return true
    }

    if (this.tabuleiro[2][0].valor !== "assets/nda.svg" && this.tabuleiro[2][0].valor == this.tabuleiro[1][1].valor && this.tabuleiro[2][0].valor == this.tabuleiro[0][2].valor) {
      return true
    }

    return false
  }

  public verVelha(): boolean {
    for (let l of this.tabuleiro) {
      for (let c of l) {
        if (c.valor == "assets/nda.svg") {
          return false
        }
      }
    }
    return true
  }

  public verIfWillWin(isTheBot: boolean): number[] {
    let caracterWillWin: string = isTheBot ? this.caracterPlayer2 : this.caracterPlayer1

    for (let l: number = 0; l < 3; l++) {
      let linha = this.tabuleiro[l]
      for (let c: number = 0; c < 3; c++) {
        let c1 = c == 2 ? 0 : c + 1
        let c2 = c > 0 ? c - 1 : 2

        if (linha[c].valor == caracterWillWin && linha[c1].valor == caracterWillWin && linha[c2].valor == "assets/nda.svg") {
          return [l, c2]
        }
      }
    }

    for (let c: number = 0; c < 3; c++) {
      for (let l: number = 0; l < 3; l++) {
        let l1 = l == 2 ? 0 : l + 1
        let l2 = l > 0 ? l - 1 : 2

        if (this.tabuleiro[l][c].valor == caracterWillWin && this.tabuleiro[l1][c].valor == caracterWillWin && this.tabuleiro[l2][c].valor == "assets/nda.svg") {
          return [l2, c]
        }
      }
    }

    for (let i: number = 0; i < 3; i++) {
      let i1 = i == 2 ? 0 : i + 1
      let i2 = i > 0 ? i - 1 : 2

      if (this.tabuleiro[i][i].valor == caracterWillWin && this.tabuleiro[i1][i1].valor == caracterWillWin && this.tabuleiro[i2][i2].valor == "assets/nda.svg") {
        return [i2, i2]
      }
    }

    for (let i: number = 0; i < 3; i++) {
      let i1 = i == 0 ? 1 : (i * i) - i
      let i2 = i == 2 ? 0 : i + 1
      let i3 = 2 - i
      let i4 = i == 0 ? 2 : i - 1
      let i5 = i4 == 2 ? 0 : 2 - i4

      if (this.tabuleiro[i][i3].valor == caracterWillWin && this.tabuleiro[i2][i1].valor == caracterWillWin && this.tabuleiro[i4][i5].valor == "assets/nda.svg") {
        return [i4, i5]
      }
    }
    return [9, 9]
  }

  public verEmptyPlace(): number[] {
    for (let l: number = 0; l < 3; l++) {
      let linha = this.tabuleiro[l]
      for (let c: number = 0; c < 3; c++) {
        if (linha[c].valor == "assets/nda.svg") {
          return [l, c]
        }
      }
    }

    return [9, 9]
  }

  public botTime() {
    let tabuleiroNow = this.tabuleiro

    if (this.contTimes % 2 == 0) {
      if (this.contTimes / 2 == 0) {
        tabuleiroNow[0][0].valor = this.caracterPlayer2
        this.myMove = 1
      }

      else if (this.contTimes / 2 == 1) {
        if (tabuleiroNow[1][1].valor !== "assets/nda.svg") {
          tabuleiroNow[2][2].valor = this.caracterPlayer2
          this.myMove = 12
          this.theirMove = 1
        }
        else {
          if (tabuleiroNow[2][0].valor === "assets/nda.svg" && tabuleiroNow[1][0].valor === "assets/nda.svg") {
            tabuleiroNow[2][0].valor = this.caracterPlayer2
            this.myMove = 10
          }
          else {
            tabuleiroNow[0][2].valor = this.caracterPlayer2
            this.myMove = 11
          }
          this.theirMove = 2
        }
      }

      else if (this.contTimes / 2 == 2) {
        if (this.myMove == 10) {
          if (tabuleiroNow[1][0].valor === "assets/nda.svg") {
            tabuleiroNow[1][0].valor = this.caracterPlayer2
          }
          else if (tabuleiroNow[2][2].valor === "assets/nda.svg") {
            tabuleiroNow[2][2].valor = this.caracterPlayer2
            this.myMove = 100
          }
          else {
            tabuleiroNow[0][2].valor = this.caracterPlayer2
            this.myMove = 101
          }
        }
        else if (this.myMove == 11) {
          if (tabuleiroNow[0][1].valor === "assets/nda.svg") {
            tabuleiroNow[0][1].valor = this.caracterPlayer2
          }
          else if (tabuleiroNow[2][2].valor === "assets/nda.svg") {
            tabuleiroNow[2][2].valor = this.caracterPlayer2
            this.myMove = 110
          }
          else {
            tabuleiroNow[2][0].valor = this.caracterPlayer2
            this.myMove = 101
          }
        }
        else if (this.myMove == 12) {
          if (tabuleiroNow[0][2].valor != "assets/nda.svg") {
            tabuleiroNow[2][0].valor = this.caracterPlayer2
            this.myMove = 120
          }
          else if (tabuleiroNow[2][0].valor != "assets/nda.svg") {
            tabuleiroNow[0][2].valor = this.caracterPlayer2
            this.myMove = 121
          }
          else {
            if (tabuleiroNow[0][1].valor != "assets/nda.svg") {
              tabuleiroNow[2][1].valor = this.caracterPlayer2
            }
            else if (tabuleiroNow[2][1].valor != "assets/nda.svg") {
              tabuleiroNow[0][1].valor = this.caracterPlayer2
            }
            for (let i = 0; i < tabuleiroNow.length; i += 2) {
              if (tabuleiroNow[1][i].valor === this.caracterPlayer1) {
                tabuleiroNow[1][i == 0 ? 2 : 0].valor = this.caracterPlayer2
              }
            }
            this.myMove = 129
          }
        }
      }

      else if (this.contTimes / 2 == 3 && this.myMove != 129) {
        if (this.theirMove == 2) {
          if (tabuleiroNow[1][1].valor == "assets/nda.svg") {
            tabuleiroNow[1][1].valor = this.caracterPlayer2
          }
          else {
            switch (this.myMove) {
              case 100: tabuleiroNow[2][1].valor = this.caracterPlayer2; break

              case 101: tabuleiroNow[0][1].valor = this.caracterPlayer2; break

              case 110: tabuleiroNow[1][2].valor = this.caracterPlayer2; break

            }
          }
        }
        else if (this.theirMove == 1) {
          if (this.myMove == 120) {
            if (tabuleiroNow[1][0].valor == "assets/nda.svg") {
              tabuleiroNow[1][0].valor = this.caracterPlayer2
            }
            else {
              tabuleiroNow[2][1].valor = this.caracterPlayer2
            }
          }
          else if (this.myMove == 121) {
            if (tabuleiroNow[0][1].valor == "assets/nda.svg") {
              tabuleiroNow[0][1].valor = this.caracterPlayer2
            }
            else {
              tabuleiroNow[1][2].valor = this.caracterPlayer2
            }
          }
        }
      }

      else {
        tabuleiroNow = this.automaticBot(tabuleiroNow)
      }
    }
    else {
      if (Math.floor(this.contTimes / 2) == 0) {
        if (tabuleiroNow[0][1].valor == this.caracterPlayer1 || tabuleiroNow[1][2].valor == this.caracterPlayer1 || tabuleiroNow[1][0].valor == this.caracterPlayer1 || tabuleiroNow[2][1].valor == this.caracterPlayer1) {
          for (let i = 0; i < 4; i++) {
            let i1 = i < 2 ? i : i - 1
            let i2 = i < 2 ? i1 + 1 : i1 - 1
            if (tabuleiroNow[i1][i2].valor == this.caracterPlayer1) {
              if (i1 + 1 == 2) {
                tabuleiroNow[i1 + 1][i2].valor = this.caracterPlayer2
              }
              else {
                tabuleiroNow[i1][i2 + 1].valor = this.caracterPlayer2
              }

              this.myMove = i + 1

              break
            }
          }
        }
        else if (tabuleiroNow[1][1].valor == "assets/nda.svg") {
          tabuleiroNow[1][1].valor = this.caracterPlayer2
          this.myMove = 5
        }
        else {
          tabuleiroNow[0][0].valor = this.caracterPlayer2
          this.myMove = 9
        }

      }
      else if (Math.floor(this.contTimes / 2) == 1) {
        let c = this.verIfWillWin(false)
        if (c[0] != 9) {
          tabuleiroNow[c[0]][c[1]].valor = this.caracterPlayer2
          this.myMove = 9
        }
        else if (this.myMove == 1 || this.myMove == 4) {
          if (tabuleiroNow[1][2].valor == this.caracterPlayer1) {
            tabuleiroNow[1][1].valor = this.caracterPlayer2
          }
          else {
            let l = this.myMove == 1 ? 2 : 0;
            tabuleiroNow[l][2].valor == "assets/nda.svg" ? tabuleiroNow[l][2].valor = this.caracterPlayer2 : tabuleiroNow[1][1].valor = this.caracterPlayer2
          }
          this.myMove = 11
        }
        else if (this.myMove == 2 || this.myMove == 3) {
          if (tabuleiroNow[2][1].valor == this.caracterPlayer1) {
            tabuleiroNow[1][1].valor = this.caracterPlayer2
          }
          else {
            let c = this.myMove == 2 ? 0 : 2;
            tabuleiroNow[2][c].valor == "assets/nda.svg" ? tabuleiroNow[2][c].valor = this.caracterPlayer2 : tabuleiroNow[1][1].valor = this.caracterPlayer2
          }
          this.myMove = 11
        }
        else {
          let isMIddle: boolean = false
          for (let i = 0; i < 4; i++) {
            let i1 = i < 2 ? i : i - 1
            let i2 = i < 2 ? i1 + 1 : i1 - 1

            if (tabuleiroNow[i1][i2].valor == this.caracterPlayer1) {
              i1 == 1 ? tabuleiroNow[2][1].valor = this.caracterPlayer2 : tabuleiroNow[1][2].valor = this.caracterPlayer2
              isMIddle = true
              break
            }
          }

          if (!isMIddle) {
            tabuleiroNow[0][1].valor = this.caracterPlayer2
          }

          this.myMove = isMIddle ? 12 : 9
        }
      }
      else if (Math.floor(this.contTimes / 2) == 2 && this.myMove != 9) {
        let c = this.verIfWillWin(true)[0] != 9 ? this.verIfWillWin(true) : this.verIfWillWin(false)
        if (c[0] != 9) {
          tabuleiroNow[c[0]][c[1]].valor = this.caracterPlayer2
        }
        else if (this.myMove == 11) {
          tabuleiroNow[1][1].valor = this.caracterPlayer2
        }
        else {
          if (tabuleiroNow[0][1].valor == this.caracterPlayer1 && tabuleiroNow[0][0].valor == "assets/nda.svg") {
            tabuleiroNow[0][0].valor = this.caracterPlayer2
          }
          else if (tabuleiroNow[2][1].valor == this.caracterPlayer1 && tabuleiroNow[2][0].valor == "assets/nda.svg") {
            tabuleiroNow[2][0].valor = this.caracterPlayer2
          }
          else {
            tabuleiroNow = this.automaticBot(tabuleiroNow)
          }
        }

      }
      else {
        tabuleiroNow = this.automaticBot(tabuleiroNow)
      }
    }
  }

  public automaticBot(tabuleiroNow: Tabuleiro[][]): Tabuleiro[][] {
    let c = this.verIfWillWin(true)[0] != 9 ? this.verIfWillWin(true) : this.verIfWillWin(false)

    if (c[0] != 9) {
      tabuleiroNow[c[0]][c[1]].valor = this.caracterPlayer2
    }
    else {
      let lug = this.verEmptyPlace()
      if (lug[0] != 9) {
        tabuleiroNow[lug[0]][lug[1]].valor = this.caracterPlayer2
      }
    }

    return tabuleiroNow
  }
}
