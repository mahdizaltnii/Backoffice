import { Component, ElementRef, ViewChild } from '@angular/core';
import { EvaluationService } from '../services/evaluation.service';
import { Evaluation } from '../modal/evaluation';



@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent {



  public isSubmitted: boolean = false;

  listFeedback: any;
 // editFormVisible: boolean = false;
  newEvaluation: Evaluation = new Evaluation();



  constructor(private evaluationService: EvaluationService) { }

  ngOnInit(): void {
    this.getFeedbackList();
  }

  getFeedbackList() {
    this.evaluationService.getFeedbackList().subscribe(res => this.listFeedback = res)
  }


  getFeedbackByTrainer(id: number)
  {
    this.evaluationService.getFeedbackByTrainer(id).subscribe(res => this.listFeedback = res)
  }

  getFeedbackByLearner(id: number)
  {
    this.evaluationService.getFeedbackByLearner(id).subscribe(res => this.listFeedback = res)
  }
 
  
saveFeedback( trainingEvalu: Evaluation) {
//*** get argus from html hidden input
const idTrainerElement = document.getElementById('idtrainer') as HTMLInputElement;
const idLearnerElement = document.getElementById('idlearner') as HTMLInputElement;

const idTrainer = Number(idTrainerElement.value);
const idLearner = Number(idLearnerElement.value);
//*** 

      this.evaluationService.saveFeedback( idTrainer, idLearner ,trainingEvalu).subscribe(() => {
  
        this.newEvaluation = new Evaluation();
       // this.getFeedbackList();
        this.isSubmitted = true;

      });
    }

    


    
  
    
}





/*
  showAddForm() {
    this.editFormVisible = true;
  }

  hideAddForm() {
    this.newTraining = new Training();
    this.editFormVisible = false;
  }
*/


  

 
