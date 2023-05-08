import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quizz } from '../modal/quizz';
import { QuestQuizz } from '../modal/quest-quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  private baseUrl = 'http://localhost:8083/api/quizz';


  constructor(private http: HttpClient) { 
   
  }


  getQuizzsList(): Observable<Quizz[]> {
    return this.http.get<Quizz[]>(`${this.baseUrl}`);
  }

  addQuizz(q: Quizz): Observable<Quizz>{
    return this.http.post<Quizz>(`${this.baseUrl}/add`,q );
  }

  getQuizzs(idF :number): Observable<Quizz[]>{
    return this.http.get<Quizz[]>(`${this.baseUrl}/getQuizzs/${idF}`);
  }

  getQuizzById(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addAndAssignQuestionQuizz(idQuizz : number ,newQuestion: QuestQuizz) :Observable<QuestQuizz> {
    return this.http.post<QuestQuizz>(`${this.baseUrl}/add/question/${idQuizz}`, newQuestion);
  }


  
}
