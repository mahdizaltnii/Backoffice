import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private baseUrl = 'http://localhost:8083/api/formation';

  constructor(private http : HttpClient) { }

  getImageById(idF: number)
  {
   return this.http.get(`${this.baseUrl}/getImageById/${idF}`, { responseType: 'blob' });
}


}
