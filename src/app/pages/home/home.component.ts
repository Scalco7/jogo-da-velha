import { Component } from '@angular/core';
import { ConteudoBotao } from 'src/app/interfaces/ConteudoBotao';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public listButton1: ConteudoBotao[] = [
    {type:"img", cont:"assets/player-1.svg"},
    {type:"img", cont:"assets/vs-img.svg"},
    {type:"img", cont:"assets/bot-img.svg"},
  ]

  public listButton2: ConteudoBotao[] = [
    {type:"img", cont:"assets/player-1.svg"},
    {type:"img", cont:"assets/vs-img.svg"},
    {type:"img", cont:"assets/player-2.svg"}
  ]
}
