import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input() tomato;
  @Output() getter = new EventEmitter();
  @Output() catGetter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getQuestion(){
    this.getter.emit();
  }

  getCatQuestion(catID){
    this.catGetter.emit(catID);
    // console.log(catID);
  }

}
