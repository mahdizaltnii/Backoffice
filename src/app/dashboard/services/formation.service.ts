import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Training} from "../modal/training";
import {Observable} from "rxjs";
import { Quizz } from '../modal/quizz';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private baseUrl = 'http://localhost:8083/api/formation';

  constructor(private http: HttpClient) { }

  getTrainingList(): Observable<Training[]> {
    return this.http.get<Training[]>(`${this.baseUrl}`);
  }

  addTraining(training: Training): Observable<Training> {
    return this.http.post<Training>(`${this.baseUrl}/addFormation`, training);
  }

  updateTraining(training: Training): Observable<Training> {
    return this.http.put<Training>(`${this.baseUrl}/${training.id}`, training);
  }

  deleteTraining(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteFormationAndAssociatedQuizzs/${id}`);
  }
  getTrainingById(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  getQuizzs(id : number) : Observable<Quizz[]>
  {
    return this.http.get<Quizz[]>(`${this.baseUrl}/getQuizzs/${id}`);
  }

  // uploadImage(formData: FormData, idFormation: number): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/uploadAndAssignImageToFormation/${idFormation}`, formData);
  // }

 

  getImageById(idF: number)
  {
   return this.http.get(`${this.baseUrl}/getImageById/${idF}`, { responseType: 'blob' });
}

}
