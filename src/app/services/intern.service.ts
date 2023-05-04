import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from  '@angular/common/http';
import { Intern } from '../core/intern';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  private apiserverUrl='http://localhost:8083/intern';
  constructor(private http: HttpClient) { }
  public addIntern(intern :Intern): Observable<Intern>{
    return this.http.post<Intern>(`${this.apiserverUrl}/addIntern`,intern);
}
public UpdateIntern(internId:number , intern :Intern): Observable<Intern>{
  return this.http.put<Intern>(`${this.apiserverUrl}/updateIntenrship/${internId}`,intern);
}
public getAllInterns(): Observable<Intern[]>{
  return this.http.get<Intern[]>(`${this.apiserverUrl}/getInterns`)
}
public getIntern(internId:number ): Observable<Intern>{
  return this.http.get<Intern>(`${this.apiserverUrl}/getIntern/${internId}`);
}
public deleteIntern(internId:number ): Observable<void>{
  return this.http.delete<void>(`${this.apiserverUrl}/delIntern/${internId}`);
}
}
