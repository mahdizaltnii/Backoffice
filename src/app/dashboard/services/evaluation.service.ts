import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evaluation } from '../modal/evaluation';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {


 
    private baseUrl = 'http://localhost:8083/api/feedback';

    constructor(private http: HttpClient) { }
  

   
    
    getFeedbackList(): Observable<Evaluation[]> {
      return this.http.get<Evaluation[]>(`${this.baseUrl}`);
    }
  
    getFeedbackByTrainer(id:number): Observable<any> {
      return this.http.get(`${this.baseUrl}/get/training/${id}`)
    }


    getFeedbackByLearner(id:number): Observable<any> {
      return this.http.get(`${this.baseUrl}/get/training/${id}`)
    }

    saveFeedback( idTrainer:number, idLearner:number,trainingEvalu: Evaluation): Observable<Evaluation> {
      let params = new HttpParams();

     
      const headers = new HttpHeaders().set('Content-Type', 'application/json');

      return this.http.post<Evaluation>(`${this.baseUrl}/save/${idTrainer}/${idLearner}`,trainingEvalu,{headers});
    }
  

 }
 

 