import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  constructor(private http: HttpClient) { }

  getTypeAnalyse() {
    return this.http.get('http://localhost:8083/types')
  }

  postTypeAnalyse(data: any) {
    return this.http.post('http://localhost:8083/types', data)
  }

  getAnalyse(data: any) {
    return this.http.get('http://localhost:8083/analyse')
  }

  editTypeAnalyse(data: any) {
    return this.http.put('http://localhost:8083/types', data)
  }

  deleteTypeAnalyse(id: any) {
    return this.http.delete('http://localhost:8083/types/' + id)
  }
}

