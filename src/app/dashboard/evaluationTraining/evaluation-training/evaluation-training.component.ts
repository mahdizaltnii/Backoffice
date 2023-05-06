import {Component, OnInit} from '@angular/core';
//import {EvaluationTraining} from "../modal/evaluation-training";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EvaluationTrainingService} from "../services/evaluation-training.service";

@Component({
  selector: 'app-evaluation-training',
  templateUrl: './evaluation-training.component.html',
  styleUrls: ['./evaluation-training.component.css']
})
export class EvaluationTrainingComponent  implements OnInit {

  feedbackForm: FormGroup | undefined;

 // constructor(private formBuilder: FormBuilder, private feedbackService: EvaluationTraining) { }

  ngOnInit(): void {
   // this.feedbackForm = this.formBuilder.group({
     // question_1: ['', Validators.required],
     // question_2: ['', Validators.required],
     // question_3: ['', Validators.required],
     // question_4: ['', Validators.required],
     // question_5: ['', Validators.required],
     // question_6: ['', Validators.required],
     // question_7: ['', Validators.required],
     // question_8: ['', Validators.required],
      // question_9: ['', Validators.required],

   // });
  }

  // onSubmit() {
  //   this.feedbackService.saveFeedback(this.feedbackForm.value).subscribe(
  //     res => console.log(res),
  //     error => console.log(error)
  //   );
  // }




}
