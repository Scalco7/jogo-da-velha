import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonGeralComponent } from './components/button-geral/button-geral.component';
import { EscolhaPlayerComponent } from './components/escolha-player/escolha-player.component';
import { HomeComponent } from './pages/home/home.component';
import { ChooseCaracterComponent } from './pages/choose-caracter/choose-caracter.component';
import { ButtonVoltarComponent } from './components/button-voltar/button-voltar.component';
import { GameComponent } from './pages/game/game.component';
import { GameOverComponent } from './components/game-over/game-over.component';
import { TabuleiroGameComponent } from './components/tabuleiro-game/tabuleiro-game.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonGeralComponent,
    EscolhaPlayerComponent,
    HomeComponent,
    ChooseCaracterComponent,
    ButtonVoltarComponent,
    GameComponent,
    GameOverComponent,
    TabuleiroGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
