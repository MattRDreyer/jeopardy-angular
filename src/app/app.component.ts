import { Component, OnInit } from '@angular/core';

import { JeopardyDataService } from './jeopardy-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeopardy API';

  question: any;
  categories: any = [];
  successMessage: string;
  errorMessage: string;


  constructor(private useanything: JeopardyDataService){}

  getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getQuestions(){
    this.useanything.getRecord("random") //random is the endpoint
      .subscribe(  //this is listening to the observable
        questions => {
          this.question = questions[0]; //getting "questions" data array
          console.log(this.question);
          },
        error =>  
        {this.errorMessage = <any>error; 
          console.log(this.errorMessage)});
  }  

  getCatQuestions(catID){
    // console.log(catID);
    this.useanything.getCatRecord("clues", catID) 
      .subscribe(  //this is listening to the observable
        questions => {
          this.question = questions[0]; //getting "questions" data array
          console.log(this.question);
          },
        error =>  
        {this.errorMessage = <any>error; 
          console.log(this.errorMessage)});
  }  

  getCategories(){
    this.useanything.getRecords("categories",this.getRandomInt(1,17000)) //random is the endpoint
      .subscribe(  //this is listening to the observable
        categories => {
          this.categories = categories; 
          console.log(this.categories)
        },
        error =>  
        {this.errorMessage = <any>error; 
          console.log(this.errorMessage)});
    this.question = '';
  }  

  ngOnInit(){
    // this.getQuestions();
    this.getCategories();
  }
}