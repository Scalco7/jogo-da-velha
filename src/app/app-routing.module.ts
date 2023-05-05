import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './pages/home/home.component';
import { ChooseCaracterComponent } from './pages/choose-caracter/choose-caracter.component';
import { GameComponent } from './pages/game/game.component';
import { GameOverComponent } from './components/game-over/game-over.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "escolha/:id", component: ChooseCaracterComponent},
  {path: "game/:data", component: GameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
