import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../services/quizz.service';
import { Quizz } from '../modal/quizz';
import { QuestQuizz } from '../modal/quest-quizz';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {
  listQuizzs : any;
  newQuizz : Quizz = new Quizz();
  quizzById :any;
  newQuestion : QuestQuizz = new QuestQuizz();


  constructor(private quizzService: QuizzService) { }

  ngOnInit(): void {
    this.getAllQuizzs();
  }



  getAllQuizzs() {
    this.quizzService.getQuizzsList().subscribe(res => this.listQuizzs = res)
  }


  addQuizz(newQuizz: Quizz) {
    this.quizzService.addQuizz(newQuizz).subscribe(() => {

      this.newQuizz = new Quizz();
      this.getAllQuizzs();
    });
  }
  

  getQuizzById(id :number ){
  this.quizzService.getQuizzById(id).subscribe(
    res => this.quizzById = res
  );
  
  }

  addAndAssignQuestionQuizz(idQuizz : number ,quest : QuestQuizz) 
  {
    
   // this.newQuestion.quizz = this.selectedQuizz;
   console.log(this.newQuestion);

    this.quizzService.addAndAssignQuestionQuizz(idQuizz,quest ).subscribe(() => {
       
    });
  }


}
