import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StatusMessageComponent } from './status-message/status-message.component';
import { GameCanvasComponent } from './game-canvas/game-canvas.component';
import { JeopardyDataService } from './jeopardy-data.service';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StatusMessageComponent,
    GameCanvasComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    JeopardyDataService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
