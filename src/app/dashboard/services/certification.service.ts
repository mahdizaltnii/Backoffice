import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Training} from "../modal/training";
import {Observable} from "rxjs";
import { Quizz } from '../modal/quizz';
import { Certification } from '../modal/certification';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  private baseUrl = 'http://localhost:8083/api/certificat';

  constructor(private http: HttpClient) { }



  getCertificationList(): Observable<Certification[]> {
    return this.http.get<Certification[]>(`${this.baseUrl}`);
  }



  addCertification(idFormation: number, c: Certification): Observable<any> {
    const url = `${this.baseUrl}/AddAndAssignToFormation/${idFormation}`;
    return this.http.post<Certification>(url, c);
  }

  deleteCertification(id: number): Observable<Certification> {
    return this.http.delete<Certification> (`${this.baseUrl}/${id}`);
  }
  getCertificationById(id:number): Observable<Certification> {
    return this.http.get<Certification>(`${this.baseUrl}/${id}`);
  }


  getImageById(id: number)
  {
   return this.http.get(`${this.baseUrl}/getImageById/${id}`, { responseType: 'blob' });
  }

}
