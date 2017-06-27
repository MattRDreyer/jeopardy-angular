import { Component, OnInit, Input } from '@angular/core';

import { JeopardyDataService } from 'app/jeopardy-data.service'

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements OnInit {

  @Input() potato;

  constructor() { }

  ngOnInit() {
  }

}
