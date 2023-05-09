import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { LeaveAuth } from '../core/leaveAuth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private apiserverUrl='http://localhost:8083/leave';

  constructor(private http: HttpClient) { }

  public addLeave(leave :LeaveAuth,idu:number): Observable<LeaveAuth>{
    return this.http.post<LeaveAuth>(`${this.apiserverUrl}/addLeave/${idu}`,leave);
}
public affectLeaveUser(idl:number,idu:number): Observable<LeaveAuth>{
  return this.http.put<LeaveAuth>(`${this.apiserverUrl}/affectLeaveUser/${idl}/${idu}`,null);
}
public UpdateLeave(leaveId:number , leave :LeaveAuth): Observable<LeaveAuth>{
  return this.http.put<LeaveAuth>(`${this.apiserverUrl}/updateLeave/${leaveId}`,leave);
}
public getLeaves(): Observable<LeaveAuth[]>{
  return this.http.get<LeaveAuth[]>(`${this.apiserverUrl}/getLeaves`)
}
public getLeave(leaveId:number ): Observable<LeaveAuth>{
  return this.http.get<LeaveAuth>(`${this.apiserverUrl}/getLeave/${leaveId}`);
}
public deleteLeave(leaveId:number ): Observable<void>{
  return this.http.delete<void>(`${this.apiserverUrl}/delLeave/${leaveId}`);
}
public totalDays(id:number):Observable<Number>{
  return this.http.get<Number>(`${this.apiserverUrl}/totaldays/${id}`);
}
public acceptLeave(idl:number): Observable<LeaveAuth>{
  return this.http.put<LeaveAuth>(`${this.apiserverUrl}/acceptLeave/${idl}`,null);
}
public refuseLeave(idl:number): Observable<LeaveAuth>{
  return this.http.put<LeaveAuth>(`${this.apiserverUrl}/refuseLeave/${idl}`,null);
}

public acceptedLeaves(): Observable<LeaveAuth[]>{
  return this.http.get<LeaveAuth[]>(`${this.apiserverUrl}/AcceptedLeaves`)
}
public reffusedLeaves(): Observable<LeaveAuth[]>{
  return this.http.get<LeaveAuth[]>(`${this.apiserverUrl}/reffusedLeaves`)
}
public attenteLeaves(): Observable<LeaveAuth[]>{
  return this.http.get<LeaveAuth[]>(`${this.apiserverUrl}/attenteLeaves`)//n'oublie pas de coriger la route dans le controller backend
}
public acceptedLeavesPerPser(): Observable<LeaveAuth[]>{
  return this.http.get<LeaveAuth[]>(`${this.apiserverUrl}/acceptedLeavesPerPser`)
}
public getLeaveStatsByStatus(): Observable<Object[]>{
  return this.http.get<Object[]>(`${this.apiserverUrl}/leaveStats`)
}
public getUsersOnLeave(): Observable<Object[]>{// n'oubie pas de changer le type de retour liste de user
  return this.http.get<Object[]>(`${this.apiserverUrl}/usersOnLeave`)
}
public getLeaveStatisticsByReason(): Observable<Object[]>{
  return this.http.get<Object[]>(`${this.apiserverUrl}/leaveStatistics`)
}
public getLeaveStatisticsByStatus(): Observable<Object[]>{
  return this.http.get<Object[]>(`${this.apiserverUrl}/leaveStats`)
}
}
