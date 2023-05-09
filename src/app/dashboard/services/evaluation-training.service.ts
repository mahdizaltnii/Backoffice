import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Training} from "../modal/training";
import {Observable} from "rxjs";
import {EvaluationTraining} from "../modal/evaluation-training";


@Injectable({
  providedIn: 'root'
})


export class EvaluationTrainingService {

  private baseUrl = 'http://localhost:8083/api/feedback';

  constructor(private http: HttpClient) { }

  saveFeedback(trainingEvalu: EvaluationTraining, idTrainer:number, idLearner:number): Observable<EvaluationTraining> {
    // @ts-ignore
    return this.http.post<EvaluationTraining>(`${this.baseUrl}/save/${idTrainer}${idLearner}`);
  }


  getEvaluationTrainingList(): Observable<EvaluationTraining[]> {
    return this.http.get<EvaluationTraining[]>(`${this.baseUrl}`);
  }


  updateEvaluationTraining(training: Training): Observable<Training> {
    return this.http.put<Training>(`${this.baseUrl}/${training.id}`, training);
  }

  deleteEvaluationTraining(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }


  getFeedbackByTrainer(idtrainer:number): Observable<EvaluationTraining[]> {
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/get/training/${idtrainer}`)
  }


  getFeedbackByLearner(idlearner:number): Observable<EvaluationTraining[]> {
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/get/training/${idlearner}`)
  }





}
