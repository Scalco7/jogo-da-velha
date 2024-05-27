import { Component } from '@angular/core';
import { ConteudoBotao } from 'src/app/interfaces/ConteudoBotao';

const PLAYER_1_IMG = "assets/player-1.svg";
const VS_IMG = "assets/vs-img.svg";
const BOT_IMG = "assets/bot-img.svg";
const PLAYER_2_IMG = "assets/player-2.svg";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public listButton1: ConteudoBotao[] = this.createButtonList([PLAYER_1_IMG, VS_IMG, BOT_IMG]);
  public listButton2: ConteudoBotao[] = this.createButtonList([PLAYER_1_IMG, VS_IMG, PLAYER_2_IMG]);

  createButtonList(contents: string[]): ConteudoBotao[] {
    return contents.map(content => ({ type: "img", cont: content }));
  }
}
