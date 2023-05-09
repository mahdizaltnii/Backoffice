import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit{

  imageDataUrl!: string;


constructor(private imageS: ImageService)
{}



ngOnInit(): void {
  this.getImageById(3);
  //6
}

getImageById(idFormation: number): void {
  this.imageS.getImageById(idFormation).subscribe((imageBlob: Blob) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imageDataUrl = reader.result as string;
    };
    reader.readAsDataURL(imageBlob);
  });
}

 
}


