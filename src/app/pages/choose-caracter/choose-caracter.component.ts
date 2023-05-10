import { Component, OnInit } from '@angular/core';
import { ConteudoBotao } from '../../interfaces/ConteudoBotao';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choose-caracter',
  templateUrl: './choose-caracter.component.html',
  styleUrls: ['./choose-caracter.component.scss']
})
export class ChooseCaracterComponent implements OnInit {
  public contButton: ConteudoBotao[] = [{
    type: "txt",
    cont: "Confirmar",
  }]

  public tipoDeChoose?: string

  public isOne: boolean = true

  public espacoButtonDiv: string = "margin-top: 90px;"

  public pathToGame: string = "";

  public bloqueadorButtonHidden: string = "display: flex;"

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => this.tipoDeChoose = res['id'])
    this.pathToGame = "game/" + this.tipoDeChoose + "000";
  }

  ngOnInit(): void {
    if (this.tipoDeChoose == "2") {
      this.isOne = false
      this.espacoButtonDiv = "margin-top: 50px;"
    }
  }

  verCaracterEscolhido1(car: string) {
    if (car == "x") {
      car = "1"
    } else if (car == "b") {
      car = "2"
    } else {
      car = "3"
    }

    this.pathToGame = this.pathToGame.slice(0, -3) + car + this.pathToGame.slice(-2,)

    if (this.tipoDeChoose === "1" || this.pathToGame.slice(-1) !== "0") {
      this.bloqueadorButtonHidden = "display: none;"
    }
  }

  verCaracterEscolhido2(car: string) {
    if (car == "x") {
      car = "1"
    } else if (car == "b") {
      car = "2"
    } else {
      car = "3"
    }

    this.pathToGame = this.pathToGame.slice(0, -2) + car + this.pathToGame.slice(-1)

    if (this.pathToGame.slice(-3, -2) !== "0") {
      this.bloqueadorButtonHidden = "display: none;"
    }
  }

  blockButton() {
    alert("Você deve selecionar um simbolo")
  }
}
