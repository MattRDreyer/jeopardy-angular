import { Component, OnInit, Input } from '@angular/core';

import { JeopardyDataService } from 'app/jeopardy-data.service'

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  @Input() tomato;

  totalScore: number = 0;

  constructor() { }

  ngOnInit() {
  }

  addValue(){
    this.totalScore += this.tomato.value
  }

}
