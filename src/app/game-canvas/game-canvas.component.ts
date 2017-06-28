import { Component, OnInit, Input } from '@angular/core';

import { JeopardyDataService } from 'app/jeopardy-data.service'

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements OnInit {

  @Input() potato;

  userAnswer: string = "";
  totalScore: number = 0;
  gameMessage: string = "";

  constructor(private JeopardyDataService: JeopardyDataService) { }

  ngOnInit() {
  }

  submitAnswer(){
    if (this.userAnswer == this.potato.answer){
      this.totalScore += this.potato.value;
      this.gameMessage = "Good Job!";
    } else {
      this.gameMessage = "You suck!";
    }
    
  }

  newQuestion() {
    this.JeopardyDataService.getRecords("random")

      .subscribe(  //this is listening to the observable
        questions => {
          this.potato = questions[0]; //getting "questions" data array
          console.log(this.potato);
          })
  }

}
