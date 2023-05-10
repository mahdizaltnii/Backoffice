import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Training} from "../modal/training";
import {FormationService} from "../services/formation.service";
import { QuestQuizz } from '../modal/quest-quizz';
import { QuizzService } from '../services/quizz.service';
import { Proposition } from '../modal/proposition';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})

export class TrainingComponent implements OnInit {

  photoFile: File | undefined;
  listTrainings: Training[] = [];
  listQuizzs: any;
  editFormVisible: boolean = true;
  newTraining: Training = new Training();
  newQuestion: QuestQuizz = new QuestQuizz();
  proposition1: Proposition= new Proposition();
  proposition2: Proposition= new Proposition();
  proposition3: Proposition= new Proposition();
  imageDataUrl!: string;

training !: Training;


  public isSubmitted: boolean = false;
  selectedQuizz: any ;



  constructor(private trainingService: FormationService, private quizzService : QuizzService) { }

  ngOnInit(): void {
    this.getAllTrainings();
  }

  getAllTrainings() {
    this.trainingService.getTrainingList().subscribe(res => {
      this.listTrainings = res;
      this.listTrainings.forEach(training => {
        this.getImageById(training.id).subscribe(imageDataUrl => {
          training.imageDataUrl = imageDataUrl;
        });
      });
    });
  }
  
  getImageById(idFormation: number): Observable<string> {
    return new Observable<string>(observer => {
      this.trainingService.getImageById(idFormation).subscribe((imageBlob: Blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageDataUrl = reader.result as string;
          observer.next(imageDataUrl);
          observer.complete();
        };
        reader.readAsDataURL(imageBlob);
      });
    });
  }
  


  hideAddValues() {
    this.newTraining = new Training();
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
    this.editFormVisible = false;


  }

  showQuizzDetails() {
    console.log(this.selectedQuizz);
  }



  addAndAssignQuestionQuizz(idQuizz: number ,newQuestion: QuestQuizz)
  {
    
   

    this.quizzService.addAndAssignQuestionQuizz(idQuizz,newQuestion).subscribe(() => {

      this.newQuestion = new QuestQuizz();
      console.log(this.newQuestion);

     

       
    });
  }




  addQuestionWithPropositions() {
    // Create a new QuestQuizz object with the question and propositions
    const newQuestQuizz: QuestQuizz = {
      id: this.newQuestion.id,
      quizz :this.selectedQuizz,
      question: this.newQuestion.question,
      propositions: [this.proposition1, this.proposition2, this.proposition3]
    };

    // Assign the new QuestQuizz to the selected quiz or handle it according to your logic
    if (this.selectedQuizz) {
      // If a quiz is selected, add the question with propositions to the selected quiz
      this.addAndAssignQuestionQuizz(this.selectedQuizz.id, newQuestQuizz);
    } 

    this.selectedQuizz.quest_quizs.push(newQuestQuizz);


    // Reset the input values
    this.newQuestion = new QuestQuizz();
    this.proposition1 = new Proposition();
    this.proposition2 = new Proposition();
    this.proposition3 = new Proposition();



  }

 
  updatePropositions(selectedIndex: number) {
    if (selectedIndex === 1) {
      this.proposition2.is_correct_answer = 0;
      this.proposition3.is_correct_answer = 0;
    } else if (selectedIndex === 2) {
      this.proposition1.is_correct_answer = 0;
      this.proposition3.is_correct_answer = 0;
    } else if (selectedIndex === 3) {
      this.proposition1.is_correct_answer = 0;
      this.proposition2.is_correct_answer = 0;
    }
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






/*
  getImageById(idFormation: number): void {
    this.trainingService.getImageById(idFormation).subscribe((imageBlob: Blob) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.imageDataUrl = reader.result as string;
      };
      reader.readAsDataURL(imageBlob);
    });
  }

*/



}
