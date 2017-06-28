import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements OnInit {

  @Input() potato;
  @Output() scored = new EventEmitter();

  userAnswer: string = "";
  totalScore: number = 0;
  rightMessage: string = "";
  wrongMessage: string ="";
  rightCount: number = 0;
  wrongCount: number = 0;

  constructor() { }

  ngOnInit() {
  }

  submitAnswer(){
    if (this.userAnswer == this.potato.answer){
      this.totalScore += this.potato.value;
      this.rightMessage = "Good Job, you got " + (this.rightCount += 1) + " in a row!";
      this.wrongMessage = ''; 
      this.wrongCount = 0;
    } else {
      this.wrongMessage = "You suck, you missed " + (this.wrongCount += 1) + " in a row!";
      this.rightMessage = ''; 
      this.rightCount = 0;
    }
    this.userAnswer = '';
    this.scored.emit()

     
  }

}
