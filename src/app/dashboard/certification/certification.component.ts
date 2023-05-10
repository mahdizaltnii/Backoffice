import { Component, OnInit } from '@angular/core';
import {CertificationService} from "../services/certification.service";
import { Certification } from '../modal/certification';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit{

  imageDataUrl!: string;

  c !: Certification;
  listCertifications: Certification[] = [];
  newCertification: Certification = new Certification();




constructor(private certificationService : CertificationService)
{}


  ngOnInit(): void {
    this.getAllCertifications();
  }

  getAllCertifications() {
    this.certificationService.getCertificationList().subscribe(res => {
      this.listCertifications = res;
         this.listCertifications.forEach(c => {
         this.getImageById(c.id).subscribe(imageDataUrl => {
         c.imageDataUrl = imageDataUrl;
      });
      });
    });
  }


 
  getImageById(idC: number): Observable<string> {
    return new Observable<string>(observer => {
      this.certificationService.getImageById(idC).subscribe((imageBlob: Blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageDataUrl = reader.result as string;
          observer.next(imageDataUrl);
          observer.complete();
        };
        reader.readAsDataURL(imageBlob);
      });
    });
  }




  addCertification(idf :number, newCertification: Certification) {
    this.certificationService.addCertification(idf,newCertification).subscribe(() => {

      this.newCertification = new Certification();
      this.getAllCertifications();
    });
  }

}
