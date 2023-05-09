import { Certification } from "./certification";
import { Training } from "./training";

export class Image {
    id!: number;
    name!: string;
    type!: string;
    imageData!: string;
    f!: Training;
    c!: Certification;
  }
  