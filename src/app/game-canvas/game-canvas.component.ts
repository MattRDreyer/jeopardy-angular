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
  gameMessage: string = "";

  constructor() { }

  ngOnInit() {
  }

  submitAnswer(){
    if (this.userAnswer == this.potato.answer){
      this.totalScore += this.potato.value;
      this.gameMessage = "Good Job!";
    } else {
      this.gameMessage = "You suck!";
    }
    this.scored.emit()
  }

}
