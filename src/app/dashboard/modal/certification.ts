import { Image } from "./image";
import { Training } from "./training";

export class Certification {

    id!: number;
    name!: string;
    description!: string;
    date!: Date;
    pathQrcode!: string;
    formation!: Training;
    img!: Image;  
    imageDataUrl!: string;
    learner_name!:string


}
