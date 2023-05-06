import {Component, OnInit} from '@angular/core';
import {Training} from "../modal/training";
import {FormationService} from "../services/formation.service";



@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})

export class TrainingComponent implements OnInit {

  photoFile: File | undefined;
  listTrainings: any;
  editFormVisible: boolean = false;
  newTraining: Training = new Training();

  constructor(private trainingService: FormationService) { }

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
