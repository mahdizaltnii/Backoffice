import { Injectable } from '@angular/core';
import { InternshipRequest } from '../core/internshipRequest';
import { Observable } from 'rxjs';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntershipRequestService {

  private apiserverUrl='/internship';
  constructor(private http: HttpClient) { } 



  public addLeave(Internship :InternshipRequest): Observable<InternshipRequest>{
    return this.http.post<InternshipRequest>(`${this.apiserverUrl}/addInternship`,Internship);
}
public UpdateLeave(internshipId:number , internship :InternshipRequest): Observable<InternshipRequest>{
  return this.http.put<InternshipRequest>(`${this.apiserverUrl}/updateIntenrship/${internshipId}`,internship);
}
public affectInternInternship(idinter:number,idinternship:number): Observable<InternshipRequest>{
  return this.http.put<InternshipRequest>(`${this.apiserverUrl}/affectInbterInternshiip/${idinter}/${idinternship}`,null);
}
public getAllInternships(): Observable<InternshipRequest[]>{
  return this.http.get<InternshipRequest[]>(`${this.apiserverUrl}/getInternships`)
}
public getInternship(InternshipId:number ): Observable<InternshipRequest>{
  return this.http.get<InternshipRequest>(`${this.apiserverUrl}/getInternship/${InternshipId}`);
}
public deleteInternship(InternshipId:number ): Observable<void>{
  return this.http.delete<void>(`${this.apiserverUrl}/delInternship/${InternshipId}`);
}
public accecptInternship(idl:number): Observable<InternshipRequest>{
  return this.http.put<InternshipRequest>(`${this.apiserverUrl}/acceptInternship/${idl}`,null);
}
public refuseInternship(idl:number): Observable<InternshipRequest>{
  return this.http.put<InternshipRequest>(`${this.apiserverUrl}/refuseInternship/${idl}`,null);
}
public StatisticsDepartement(): Observable<Object[]>{
  return this.http.get<Object[]>(`${this.apiserverUrl}/statisticsByDepartement`)
}
}
