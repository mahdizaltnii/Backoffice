import {Component, OnInit} from '@angular/core';
import {Training} from "../modal/training";
import {FormationService} from "../services/formation.service";
import { QuestQuizz } from '../modal/quest-quizz';
import { QuizzService } from '../services/quizz.service';
import { Proposition } from '../modal/proposition';



@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})

export class TrainingComponent implements OnInit {

  photoFile: File | undefined;
  listTrainings: any;
  listQuizzs: any;
  editFormVisible: boolean = false;
  newTraining: Training = new Training();
  newQuestion: QuestQuizz = new QuestQuizz();
  proposition1: Proposition= new Proposition();
  proposition2: Proposition= new Proposition();
  proposition3: Proposition= new Proposition();
 



  public isSubmitted: boolean = false;
  selectedQuizz: any ;



  constructor(private trainingService: FormationService, private quizzService : QuizzService) { }

  ngOnInit(): void {
    this.getAllTrainings();
  }

  getAllTrainings() {
    this.trainingService.getTrainingList().subscribe(res => this.listTrainings = res)
  }

  showAddForm() {
    this.editFormVisible = true;
  }

  hideAddForm() {
    this.newTraining = new Training();
    this.editFormVisible = false;
  }

  addTraining(newTraining: Training) {
    this.trainingService.addTraining(newTraining).subscribe(() => {

      this.newTraining = new Training();
      this.editFormVisible = false;
      this.getAllTrainings();
      this.editFormVisible = false;
    });
  }

  editTraining(t: Training) {
    this.trainingService.updateTraining(t).subscribe();
    this.editFormVisible = false;
  }

  deleteTraining(idT: any) {
    this.trainingService.deleteTraining(idT).subscribe(() => this.getAllTrainings())
  }

  getQuizzs(idT :any){

    this.trainingService.getQuizzs(idT).subscribe(res => this.listQuizzs = res);
  }

  getMoreDetails(idT :any){
    this.trainingService.getQuizzs(idT).subscribe(res => this.listQuizzs = res);
   // this.trainingService.getQuizzQuestions(idQ).subscribe(res => this.listQuestions = res);

    this.isSubmitted = true;

  }

  showQuizzDetails() {
    console.log(this.selectedQuizz);
  }


  


  addAndAssignQuestionQuizz(idQuizz: number ,newQuestion: QuestQuizz)
  {
    
   

    this.quizzService.addAndAssignQuestionQuizz(idQuizz,newQuestion).subscribe(() => {

      this.newQuestion = new QuestQuizz();
      console.log(this.newQuestion);
      this.trainingService.getQuizzs(idQuizz).subscribe((questions) => {
        this.selectedQuizz.quest_quizs = questions;

      });
       
    });
  }



  // onFileSelected(event: any) {
  //   this.photoFile = event.target.files[0];
  // }
  //
  // uploadImage(event: any, idFormation: number) {
  //   const file = event.target.files[0];
  //   const formData = new FormData();
  //   formData.append('image', file);
  //
  //   this.trainingService.uploadImage(formData, idFormation).subscribe(
  //     (res) => {
  //       // handle success response
  //     },
  //     (err) => {
  //       // handle error response
  //     }
  //   );
  // }
}
