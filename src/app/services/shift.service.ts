import { Injectable } from '@angular/core';
import { Shift} from '../core/shift';
import { Observable } from 'rxjs';
import { HttpClient } from  '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ShiftService{
    private apiserverUrl='/shift';
    
    constructor(private http: HttpClient){}

    public getShifts(): Observable<Shift[]>{
            return this.http.get<Shift[]>(`${this.apiserverUrl}/getShift`)
    }

    public addShift(shift :Shift): Observable<Shift>{
        return this.http.post<Shift>(`${this.apiserverUrl}/addShift`,shift);
    }

    public UpdateShift(shiftId:number , shift :Shift): Observable<Shift>{
        return this.http.put<Shift>(`${this.apiserverUrl}/updateShift/${shiftId}`,shift);
    }

    public deleteSHift(shiftId:number ): Observable<void>{
        return this.http.delete<void>(`${this.apiserverUrl}/delShift/${shiftId}`);
    }

    public getshift(shiftId:number ): Observable<Shift>{
        return this.http.get<Shift>(`${this.apiserverUrl}/getShift/${shiftId}`);
    }

    public getShiftByDate(dateShift : Date): Observable<Shift[]>{
        return this.http.get<Shift[]>(`${this.apiserverUrl}/getShiftByDate/${dateShift}`);
    }
    public affectShiftUser(idu:number,ids:number): Observable<Shift>{
        return this.http.put<Shift>(`${this.apiserverUrl}/affectShiftUser/${idu}/${ids}`,null);
    }
    public affectShiftIntern(idu:number,idi:number): Observable<Shift>{
        return this.http.put<Shift>(`${this.apiserverUrl}/affectShiftIntern /${idu}/${idi}`,null);
    }
    public getShiftInternsByDate(dateShift : Date): Observable<Shift[]>{//you have to change the return type to Intern!!!!! 
        return this.http.get<Shift[]>(`${this.apiserverUrl}/getInternsByDate/${dateShift}`);
    }
    public getShiftUsersByDate(dateShift : Date): Observable<Shift[]>{//you have to change the return type to User!!!!! 
        return this.http.get<Shift[]>(`${this.apiserverUrl}/getInternsByDate/${dateShift}`);
    }
    }